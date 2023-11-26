/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Loading from '@components/common/Loading';
import { useNaverLogin } from '@hooks/api/users/useSNSLogin';

const NaverOauthCallback = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const grantType = 'authorization_code';
  const CLIENT_ID = `${process.env.REACT_APP_NAVER_CLIENT_ID}`;
  const CLIENT_SECRET = `${process.env.REACT_APP_NAVER_CLIENT_SECRET}`;

  const [naverId, setNaverId] = useState('');
  const [token, setToken] = useState('');
  const [SNSLoginInfo, setSNSLoginInfo] = useState({
    // 로그인 API에 넣을 정보
    nickname: '',
    naver_id: '',
  });
  const { mutate: naverMutation } = useNaverLogin(naverId);

  const getNaverAccessToken = async () => {
    console.log('네이버 코드!!::', code);
    if (code !== undefined && code !== null) {
      try {
        const res = await axios.post(
          `https://nid.naver.com/oauth2.0/token?grant_type=${grantType}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`,
        );
        console.log('응답!!::', res);
        setToken(res.data.access_token);
      } catch (error) {
        console.log('🙀 토큰 가져오기 실패!!!', error);
      }
    }
  };

  const getUserInfo = async () => {
    if (token !== '' && token !== undefined) {
      try {
        const userRes = await axios.post(`https://openapi.naver.com/v1/nid/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setSNSLoginInfo({
          nickname: userRes.data.user.name,
          naver_id: userRes.data.user.id,
        });
        setNaverId(userRes.data.user.id);
        console.log('네이버 로그인 정보!!::', userRes);
      } catch (error) {
        console.log('🙀 정보가져오기 실패!!!', error);
      }
    }
  };

  useEffect(() => {
    if (code && token === '') {
      getNaverAccessToken();
    }
  }, [code]);

  useEffect(() => {
    getUserInfo();
  }, [token]);

  useEffect(() => {
    if (SNSLoginInfo.nickname !== '' && SNSLoginInfo.naver_id) {
      naverMutation(SNSLoginInfo, {
        onSuccess: () => {
          navigate('/my-page');
        },
        onError: () => {
          console.log('🙀 에러입니다 !!!!!');
        },
      });
    }
  }, [SNSLoginInfo]);

  return <Loading />;
};

export default NaverOauthCallback;
