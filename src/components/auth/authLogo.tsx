import { styled } from 'styled-components';

import BigLogo from '@assets/mz-big-logo.svg';

interface AuthLogoProps {
  title: string;
}

const AuthLogo = ({ title }: AuthLogoProps) => {
  return (
    <LogoWrap>
      <LogoIcon src={BigLogo} />
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
  margin: 36px 0 22px 0;
  ${({ theme }) => theme.font.SB_22};

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.SB_28};
  }
`;

export default AuthLogo;
