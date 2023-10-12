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

const SignUp = () => {
  return (
    <DeskTopViewWrap>
      <SignFormWrap>
        <AuthLogo title="회원가입" />
        <SignForm>
          <FormListWrap>
            <li>
              <InputBase placeholder="이름을 입력해주세요!" />
            </li>
            <li>
              <InputBase placeholder="아이디를 입력해주세요!" />
            </li>
            <li>
              <InputBase placeholder="비밀번호를 입력해주세요!" />
            </li>
            <li>
              <InputBase placeholder="비밀번호를 한 번 더 입력해주세요!" />
            </li>
          </FormListWrap>
          <SubmitWrap>
            <Link to="/sign-in">
              <SubmitText>이미 가입하셨나요?</SubmitText>
            </Link>
            <ButtonBase name="회원가입" />
          </SubmitWrap>
        </SignForm>
      </SignFormWrap>
    </DeskTopViewWrap>
  );
};

export default SignUp;
