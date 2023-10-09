import { styled } from 'styled-components';
import mzLogo from '@assets/mz-logo.svg';

const Header = () => {
  return (
    <HeaderWrap>
      <img src={mzLogo} alt="logo" />
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  @media screen and (min-width: 1200px) {
    height: 80px;

    img {
      width: 100px;
    }
  }
`;

export default Header;
