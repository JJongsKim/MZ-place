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
import { useState } from 'react';

const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState({
    userName: '',
    userId: '',
    userPassword: '',
    checkPassword: '',
  });

  const handleChangeForm = (name: string, value: string) => {
    setSignUpForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(signUpForm);
  };

  return (
    <DeskTopViewWrap>
      <SignFormWrap>
        <AuthLogo title="회원가입" />
        <SignForm>
          <FormListWrap>
            <li>
              <InputBase
                placeholder="이름을 입력해주세요!"
                name="userName"
                value={signUpForm.userName}
                onChange={e => handleChangeForm('userName', e.target.value)}
              />
            </li>
            <li>
              <InputBase
                placeholder="아이디를 입력해주세요!"
                name="userId"
                value={signUpForm.userId}
                onChange={e => handleChangeForm('userId', e.target.value)}
              />
            </li>
            <li>
              <InputBase
                placeholder="비밀번호를 입력해주세요!"
                name="userPassword"
                value={signUpForm.userPassword}
                onChange={e => handleChangeForm('userPassword', e.target.value)}
              />
            </li>
            <li>
              <InputBase
                placeholder="비밀번호를 한 번 더 입력해주세요!"
                name="checkPassword"
                value={signUpForm.checkPassword}
                onChange={e => handleChangeForm('checkPassword', e.target.value)}
              />
            </li>
          </FormListWrap>
          <SubmitWrap>
            <Link to="/sign-in">
              <SubmitText>이미 가입하셨나요?</SubmitText>
            </Link>
            <ButtonBase type="submit" name="회원가입" onClick={handleSubmit} />
          </SubmitWrap>
        </SignForm>
      </SignFormWrap>
    </DeskTopViewWrap>
  );
};

export default SignUp;
