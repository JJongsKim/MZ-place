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
  @media screen and (min-width: 1200px) {
    width: 900px;
    height: 900px;
    border: 1px solid ${({ theme }) => theme.colors.text_gray};
  }
`;

export { DeskTopViewWrap, SignFormWrap };
