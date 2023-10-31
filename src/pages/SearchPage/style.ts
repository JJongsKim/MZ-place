import { SearchBarLine } from '@components/common/SearchBar/style';
import { styled } from 'styled-components';

const SearchPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuListWrap = styled.div`
  width: 375px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 35px;

  @media screen and (min-width: 1200px) {
    width: 800px;
  }
`;

const MenuWrap = styled(SearchPageWrap)`
  position: relative;
  z-index: 3;
  cursor: pointer;

  @media screen and (min-width: 1200px) {
    &::before {
      content: '';
      position: absolute;
      z-index: 1;

      width: 0;
      height: 0;
      border-radius: 100%;
      background-color: #afddb7;
      opacity: 20%;
      transition:
        width 0.4s,
        height 0.4s;
    }

    &:hover::before {
      width: 90px;
      height: 90px;
    }
  }
`;

const MenuIcon = styled.img`
  width: 38px;
  height: 38px;

  @media screen and (min-width: 1200px) {
    width: 42px;
    height: 42px;
  }
`;

const MenuName = styled.p`
  ${({ theme }) => theme.font.B_13};
  padding: 14px 0;

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.B_16};
    padding: 18px 0;
  }
`;

const MenuDivideLine = styled(SearchBarLine)`
  margin: 80px 0 30px;

  @media screen and (min-width: 1200px) {
    width: 850px;
    margin: 100px 0 50px;
  }
`;

export { SearchPageWrap, MenuListWrap, MenuWrap, MenuIcon, MenuName, MenuDivideLine };
