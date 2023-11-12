import ButtonBase from '@components/common/ButtonBase';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const RequestLogin = () => {
  return (
    <RequestLoginWrap>
      <TextSection>
        <p>로그인하세요</p>
        <p>로그인 후, MZ 플레이스가</p>
        <p>제공하는 다양한 기능을 체험해보세요!</p>
      </TextSection>
      <LinkButtonSection>
        <Link to="/sign-in">
          <ButtonBase type="button" name="로그인 하러가기" />
        </Link>
        <Link to="/sign-up">
          <ButtonBase type="button" name="회원가입 하러가기" />
        </Link>
      </LinkButtonSection>
    </RequestLoginWrap>
  );
};

const RequestLoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60vh;
  margin-top: 50px;

  @media screen and (min-width: 1200px) {
    margin-top: 70px;
  }
`;

const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 280px;

  p:nth-child(1) {
    margin-bottom: 40px;
    ${({ theme }) => theme.font.B_22};
  }
  p:nth-child(2) {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.gray};
    ${({ theme }) => theme.font.M_16};
  }
  p:nth-child(3) {
    color: ${({ theme }) => theme.colors.gray};
    ${({ theme }) => theme.font.M_16};
  }

  @media screen and (min-width: 1200px) {
    align-items: flex-start;
    width: 500px;

    p:nth-child(1) {
      margin-bottom: 40px;
      ${({ theme }) => theme.font.B_24};
    }
    p:nth-child(2) {
      margin-bottom: 25px;
      color: ${({ theme }) => theme.colors.gray};
      ${({ theme }) => theme.font.M_18};
    }
    p:nth-child(3) {
      color: ${({ theme }) => theme.colors.gray};
      ${({ theme }) => theme.font.M_18};
    }
  }
`;

const LinkButtonSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  :nth-child(1) {
    margin: 6px 0;
  }
`;

export default RequestLogin;
