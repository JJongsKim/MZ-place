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

  const [token, setToken] = useState('');
  const { mutate: naverMutation } = useNaverLogin();

  const getNaverAccessToken = async () => {
    if (code !== undefined && code !== null) {
      try {
        const res = await axios.post(
          `https://nid.naver.com/oauth2.0/token?grant_type=${grantType}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`,
        );
        setToken(res.data.access_token);
      } catch (error) {
        console.log('🙀 토큰 가져오기 실패!!!', error);
      }
    }
  };

  useEffect(() => {
    if (code && token === '') {
      getNaverAccessToken();
    }
  }, [code]);

  useEffect(() => {
    if (token !== '' && token !== undefined) {
      naverMutation(token, {
        onSuccess: () => {
          navigate('/my-page');
        },
      });
    }
  }, [token]);

  return <Loading />;
};

export default NaverOauthCallback;
