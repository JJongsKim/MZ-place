/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import axios from 'axios';

import Loading from '@components/common/Loading';
import { useKakaoLogin } from '@hooks/api/users/useSNSLogin';
import { useNavigate } from 'react-router-dom';

const KakaoOauthCallback = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code'); // 인가코드
  const grantType = 'authorization_code'; // 항상 고정값
  const REST_API_KEY = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
  const REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;

  const [token, setToken] = useState(''); // 카카오 토큰 저장
  const [SNSLoginInfo, setSNSLoginInfo] = useState({
    // 로그인 API에 넣을 정보
    nickname: '',
    kakao_id: '',
  });
  const { mutate: kakaoMuation } = useKakaoLogin(token);

  const getKakaoAccessToken = async () => {
    if (code !== undefined && code !== null) {
      try {
        const res = await axios.post(
          `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
          {
            authorizationCode: code,
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', // 필수 사항
            },
          },
        );
        setToken(res.data.access_token);
      } catch (error) {
        console.log('🙀 토큰 가져오기 실패!!!', error);
      }
    }
  };

  const getUserInfo = async () => {
    if (token !== '' && token !== undefined) {
      try {
        const userRes = await axios.post(
          `https://kapi.kakao.com/v2/user/me`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', // 필수 사항
            },
          },
        );

        setSNSLoginInfo({
          nickname: userRes.data.properties.nickname,
          kakao_id: userRes.data.id,
        });
      } catch (error) {
        console.log('🙀 정보가져오기 실패!!!', error);
      }
    }
  };

  useEffect(() => {
    if (code && token === '') {
      getKakaoAccessToken();
    }
  }, [code]);

  useEffect(() => {
    getUserInfo();
  }, [token]);

  useEffect(() => {
    if (SNSLoginInfo.nickname !== '' && SNSLoginInfo.kakao_id) {
      kakaoMuation(SNSLoginInfo, {
        onSuccess: () => {
          console.log('카카오 로그인 성공!!');
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

export default KakaoOauthCallback;
