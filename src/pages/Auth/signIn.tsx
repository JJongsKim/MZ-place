import AuthLogo from '@components/auth/authLogo';
import {
  DeskTopViewWrap,
  FormListWrap,
  SignForm,
  SignFormWrap,
  SubmitText,
  SubmitWrap,
} from './style';
import InputBase from '@components/common/InputBase';
import ButtonBase from '@components/common/ButtonBase';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <DeskTopViewWrap>
      <SignFormWrap>
        <AuthLogo title="로그인" />
        <SignForm>
          <FormListWrap>
            <li>
              <InputBase placeholder="아이디를 입력해주세요!" />
            </li>
            <li>
              <InputBase placeholder="비밀번호를 입력해주세요!" />
            </li>
          </FormListWrap>
          <SubmitWrap>
            <Link to="/sign-up">
              <SubmitText>아직 회원이 아니신가요?</SubmitText>
            </Link>
            <ButtonBase name="로그인" />
          </SubmitWrap>
        </SignForm>
      </SignFormWrap>
    </DeskTopViewWrap>
  );
};

export default SignIn;
