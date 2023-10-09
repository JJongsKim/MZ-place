/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from 'styled-components';

const NavWrap = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;

  @media screen and (min-width: 1200px) {
    height: 100px;
  }
`;

const NavList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (min-width: 1200px) {
    margin: 0 auto;
    width: 1188px;
  }
`;

const NavIcon = styled.img`
  margin: 10px 0;
  width: 27px;
  height: 22px;

  @media screen and (min-width: 1200px) {
    width: 35px;
    height: 30px;
  }
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  cursor: pointer;
`;

const NavName = styled.p`
  ${({ theme }) => theme.font.B_13}

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.B_16}
  }
`;

export { NavWrap, NavList, NavItem, NavIcon, NavName };
