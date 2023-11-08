import { styled } from 'styled-components';
import SeoulWalkLogo from '../../../images/seoul-walk-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrap>
      <Link to="/">
        <img src={SeoulWalkLogo} alt="logo" />
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
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 5;

  img {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: 1200px) {
    height: 75px;

    img {
      width: 60px;
      height: 60px;
    }
  }
`;

export default Header;
