import { styled } from 'styled-components';

import BigLogo from '@assets/mz-big-logo.svg';
import { Link } from 'react-router-dom';

interface AuthLogoProps {
  title: string;
}

const AuthLogo = ({ title }: AuthLogoProps) => {
  return (
    <LogoWrap>
      <Link to="/">
        <LogoIcon src={BigLogo} />
      </Link>
      <LogoTitle>{title}</LogoTitle>
    </LogoWrap>
  );
};

const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 95px;
`;

const LogoIcon = styled.img`
  width: 75px;
  height: 70px;

  @media screen and (min-width: 1200px) {
    width: 120px;
    height: 112px;
  }
`;

const LogoTitle = styled.p`
  margin: 36px 0 25px 0;
  ${({ theme }) => theme.font.SB_22};

  @media screen and (min-width: 1200px) {
    margin: 50px 0 36px 0;
    ${({ theme }) => theme.font.SB_28};
  }
`;

export default AuthLogo;
