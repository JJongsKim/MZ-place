import SearchBar from '@components/common/SearchBar';

import {
  MenuDivideLine,
  MenuIcon,
  MenuListWrap,
  MenuName,
  MenuWrap,
  SearchPageWrap,
} from './style';
import { CUSTOM_MENU, MENU } from '@application/constant';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  return (
    <SearchPageWrap>
      <SearchBar name="실외활동 탐색" searchIcon={true} />
      <MenuListWrap>
        {MENU.map(menu => (
          <Link to={menu.path} key={menu.name}>
            <MenuWrap>
              <MenuIcon src={menu.svg} />
              <MenuName>{menu.name}</MenuName>
            </MenuWrap>
          </Link>
        ))}
      </MenuListWrap>
      <MenuDivideLine />
      <MenuListWrap>
        {CUSTOM_MENU.map(custom => (
          <Link to={custom.path} key={custom.name}>
            <MenuWrap>
              <MenuIcon src={custom.svg} />
              <MenuName>{custom.name}</MenuName>
            </MenuWrap>
          </Link>
        ))}
      </MenuListWrap>
    </SearchPageWrap>
  );
};

export default SearchPage;
