// 로그인, 회원가입 공통 스타일링
import { styled } from 'styled-components';

const DeskTopViewWrap = styled.div`
  @media screen and (min-width: 1200px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SignFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1200px) {
    width: 900px;
    height: 900px;
    border: 1px solid ${({ theme }) => theme.colors.text_gray};
  }
`;

const SignForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  margin-bottom: 50px;

  @media screen and (min-width: 1200px) {
    height: 500px;
  }
`;

const FormListWrap = styled.ul`
  li {
    margin-bottom: 10px;
  }
`;

const SubmitWrap = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubmitText = styled.p`
  margin: 10px 0;
  ${({ theme }) => theme.font.SB_12};
  color: ${({ theme }) => theme.colors.gray};

  @media screen and (min-width: 1200px) {
    margin: 15px 0;
    ${({ theme }) => theme.font.SB_16};
  }
`;

// 로그인 페이지 - 소셜로그인
const SocialWrap = styled.div`
  width: 150px;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
  margin-top: 85px;

  :nth-child(1) {
    grid-column: 1/3;
  }

  @media screen and (min-width: 1200px) {
    width: 200px;
    height: 100px;
    margin-top: 75px;
  }
`;

const SocialIcon = styled.img`
  width: 55px;
  height: 55px;
  cursor: pointer;

  @media screen and (min-width: 1200px) {
    width: 70px;
    height: 70px;
  }
`;

const SocialText = styled(SubmitText)``;

export {
  DeskTopViewWrap,
  SignFormWrap,
  SignForm,
  FormListWrap,
  SubmitWrap,
  SubmitText,
  SocialWrap,
  SocialIcon,
  SocialText,
};
