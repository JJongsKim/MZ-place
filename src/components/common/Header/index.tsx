import { styled } from 'styled-components';
import mzLogo from '@assets/mz-logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrap>
      <Link to="/">
        <img src={mzLogo} alt="logo" />
      </Link>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 5;

  @media screen and (min-width: 1200px) {
    img {
      width: 80px;
    }
  }
`;

export default Header;
