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

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useToast from '@hooks/useToast';
import Toast from '@components/common/Toast';

const SignIn = () => {
  const navigate = useNavigate();
  const { toast, handleFloatingToast } = useToast();
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
    handleFloatingToast();

    setTimeout(() => {
      navigate('/');
    }, 2200);
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
                type="text"
                name="userId"
                value={signInForm.userId}
                onChange={e => handleChangeForm('userId', e.target.value)}
              />
            </li>
            <li>
              <InputBase
                placeholder="비밀번호를 입력해주세요!"
                type="password"
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
            <ButtonBase type="button" name="로그인" onClick={handleSubmit} />
          </SubmitWrap>
        </SignForm>
      </SignFormWrap>
      {toast && <Toast>로그인 되었어요!</Toast>}
    </DeskTopViewWrap>
  );
};

export default SignIn;
