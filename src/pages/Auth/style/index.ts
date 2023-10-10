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
  color: ${({ theme }) => theme.colors.text_gray};

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.SB_16};
  }
`;

export { DeskTopViewWrap, SignFormWrap, SignForm, FormListWrap, SubmitWrap, SubmitText };
