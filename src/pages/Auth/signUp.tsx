import AuthLogo from '@components/auth/authLogo';
import { DeskTopViewWrap, SignFormWrap } from './style';

const SignUp = () => {
  return (
    <DeskTopViewWrap>
      <SignFormWrap>
        <AuthLogo title="회원가입" />
      </SignFormWrap>
    </DeskTopViewWrap>
  );
};

export default SignUp;
