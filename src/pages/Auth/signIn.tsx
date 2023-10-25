import AuthLogo from '@components/auth/authLogo';
import {
  DeskTopViewWrap,
  FormListWrap,
  SignForm,
  SignFormWrap,
  SocialIcon,
  SocialText,
  SocialWrap,
  SubmitText,
  SubmitWrap,
} from './style';
import InputBase from '@components/common/InputBase';
import ButtonBase from '@components/common/ButtonBase';
import kakao from '@assets/icon-kakao.svg';
import naver from '@assets/icon-naver.svg';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignIn = () => {
  const [signInForm, setSignInForm] = useState({
    userId: '',
    userPassword: '',
  });

  const handleChangeForm = (name: string, value: string) => {
    setSignInForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(signInForm);
  };

  return (
    <DeskTopViewWrap>
      <SignFormWrap>
        <AuthLogo title="로그인" />
        <SignForm>
          <FormListWrap>
            <li>
              <InputBase
                placeholder="아이디를 입력해주세요!"
                name="userId"
                value={signInForm.userId}
                onChange={e => handleChangeForm('userId', e.target.value)}
              />
            </li>
            <li>
              <InputBase
                placeholder="비밀번호를 입력해주세요!"
                name="userPassword"
                value={signInForm.userPassword}
                onChange={e => handleChangeForm('userPassword', e.target.value)}
              />
            </li>
          </FormListWrap>
          <SocialWrap>
            <SocialText>SNS로 간편 로그인하기</SocialText>
            <SocialIcon src={kakao} alt="카카오" />
            <SocialIcon src={naver} alt="네이버" />
          </SocialWrap>
          <SubmitWrap>
            <Link to="/sign-up">
              <SubmitText>아직 회원이 아니신가요?</SubmitText>
            </Link>
            <ButtonBase type="submit" name="로그인" onClick={handleSubmit} />
          </SubmitWrap>
        </SignForm>
      </SignFormWrap>
    </DeskTopViewWrap>
  );
};

export default SignIn;
