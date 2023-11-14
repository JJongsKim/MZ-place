import { styled } from 'styled-components';

import SeoulWalkLogo from '../../images/seoul-walk-logo.png';
import { Link } from 'react-router-dom';

interface AuthLogoProps {
  title: string;
}

const AuthLogo = ({ title }: AuthLogoProps) => {
  return (
    <LogoWrap>
      <Link to="/">
        <LogoIcon src={SeoulWalkLogo} />
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

  @media screen and (min-width: 1200px) {
    margin-top: 65px;
  }
`;

const LogoIcon = styled.img`
  width: 75px;
  height: 75px;
`;

const LogoTitle = styled.p`
  margin: 36px 0 25px 0;
  ${({ theme }) => theme.font.B_18};
`;

export default AuthLogo;
