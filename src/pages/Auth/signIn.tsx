/* eslint-disable no-console */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as S from './style';
import Toast from '@components/common/Toast';
import AuthLogo from '@components/Auth/AuthLogo';
import InputBase from '@components/common/InputBase';
import ButtonBase from '@components/common/ButtonBase';
import kakao from '@assets/icon-kakao.svg';
import naver from '@assets/icon-naver.svg';

import useToast from '@hooks/useToast';
import useSignIn from '@hooks/api/users/useSignIn';

const SignIn = () => {
  const navigate = useNavigate();
  const naverState = Math.random().toString(36).substring(2, 10);

  const KAKAO_REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
  const NAVER_REDIRECT_URI = `${process.env.REACT_APP_NAVER_REDIRECT_URI}`;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;
  const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&state=${naverState}`;

  const { toast, handleFloatingToast } = useToast();
  const [signInForm, setSignInForm] = useState({
    userId: '',
    userPassword: '',
  });
  const [checkForm, isCheckForm] = useState(true);

  const handleChangeForm = (name: string, value: string) => {
    setSignInForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const { mutate: SignInMutate } = useSignIn();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (signInForm.userId !== '' || signInForm.userPassword !== '') {
      SignInMutate(
        {
          user_id: signInForm.userId,
          password: signInForm.userPassword,
        },
        {
          onSuccess: () => {
            isCheckForm(true);
            handleFloatingToast();
            setTimeout(() => {
              navigate('/');
            }, 2200);
          },
          onError: () => {
            isCheckForm(false);
            console.log('🙀 에러입니다 !!!!!');
          },
        },
      );
    } else {
      isCheckForm(false);
    }
  };

  return (
    <S.DeskTopViewWrap>
      <S.SignFormWrap>
        <AuthLogo title="로그인" />
        <S.SignForm onSubmit={handleSubmit}>
          <S.FormListWrap>
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
            {!checkForm && <S.CheckText>아이디와 비밀번호를 다시 확인해주세요!</S.CheckText>}
          </S.FormListWrap>
          <S.SocialWrap>
            <S.SocialText>SNS로 간편 로그인하기</S.SocialText>
            <Link to={kakaoURL}>
              <S.SocialIcon src={kakao} alt="카카오" />
            </Link>
            <Link to={naverURL}>
              <S.SocialIcon src={naver} alt="네이버" />
            </Link>
          </S.SocialWrap>
          <S.SubmitWrap>
            <Link to="/sign-up">
              <S.SubmitText>아직 회원이 아니신가요?</S.SubmitText>
            </Link>
            <ButtonBase name="로그인" />
          </S.SubmitWrap>
        </S.SignForm>
      </S.SignFormWrap>
      {toast && <Toast>로그인 되었어요!</Toast>}
    </S.DeskTopViewWrap>
  );
};

export default SignIn;
