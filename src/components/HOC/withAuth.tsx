import { useLocation } from 'react-router-dom';

import RequestLogin from '@components/MyPage/requestLogin';
import WarningMention from '@components/common/warning';
import { getAccessToken, getKakaoId, getNaverId } from '@infra/api/token';

const withAuth =
  <T extends object>(Component: React.ComponentType<T>) =>
  (props: T) => {
    const location = useLocation();
    const loginToken = getAccessToken();
    const kakaoId = getKakaoId();
    const naverId = getNaverId();

    return loginToken || kakaoId || naverId ? (
      <Component {...props} />
    ) : location.pathname === '/my-page' ? (
      <RequestLogin />
    ) : (
      <WarningMention text="해당 기능을 사용하시려면 로그인해주세요!" />
    );
  };

export default withAuth;
