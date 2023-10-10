import AuthLogo from '@components/auth/authLogo';
import { DeskTopViewWrap, SignFormWrap } from './style';

const SignIn = () => {
  return (
    <DeskTopViewWrap>
      <SignFormWrap>
        <AuthLogo title="로그인" />
      </SignFormWrap>
    </DeskTopViewWrap>
  );
};

export default SignIn;
