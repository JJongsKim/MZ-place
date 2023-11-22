import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import RequestLogin from '@components/MyPage/requestLogin';
import WarningMention from '@components/common/warning';
import { getAccessToken } from '@infra/api/token';

const withAuth = (Component: React.ComponentType) => (props: JSX.Element) => {
  const location = useLocation();

  const loginToken = getAccessToken();
  const [login, isLogin] = useState(false);

  useEffect(() => {
    if (loginToken) {
      isLogin(true);
    }
    if (!loginToken) {
      isLogin(false);
    }
  }, []);

  return login ? (
    <Component {...props} />
  ) : location.pathname === '/my-page' ? (
    <RequestLogin />
  ) : (
    <WarningMention text="해당 기능을 사용하시려면 로그인해주세요!" />
  );
};

export default withAuth;
