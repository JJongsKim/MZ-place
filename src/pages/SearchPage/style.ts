import { SearchBarLine } from '@components/common/SearchBar/style';
import { styled } from 'styled-components';

const SearchPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuListWrap = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 35px;

  @media screen and (min-width: 1200px) {
    width: 800px;
  }
`;

const MenuWrap = styled(SearchPageWrap)`
  cursor: pointer;
`;

const MenuIcon = styled.img`
  width: 42px;
  height: 42px;

  @media screen and (min-width: 1200px) {
    width: 44px;
    height: 44px;
  }
`;

const MenuName = styled.p`
  ${({ theme }) => theme.font.B_14};
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
