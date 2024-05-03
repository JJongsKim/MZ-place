import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from '@components/common/Loading';
import { useNaverLogin } from '@hooks/api/users/useSNSLogin';

const NaverOauthCallback = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const { mutate: naverMutation } = useNaverLogin();

  useEffect(() => {
    if (code && code !== null) {
      naverMutation(code, {
        onSuccess: () => {
          navigate('/my-page');
        },
      });
    }
  }, [code]);

  return <Loading />;
};

export default NaverOauthCallback;
