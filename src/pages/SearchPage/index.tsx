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
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const navigate = useNavigate();

  return (
    <SearchPageWrap>
      <SearchBar name="실외활동 탐색" />
      <MenuListWrap>
        {MENU.map(menu => (
          <MenuWrap key={menu.id} onClick={() => navigate(`${menu.path}`, { state: menu })}>
            <MenuIcon src={menu.svg} />
            <MenuName>{menu.name}</MenuName>
          </MenuWrap>
        ))}
      </MenuListWrap>
      <MenuDivideLine />
      <MenuListWrap>
        {CUSTOM_MENU.map(custom => (
          <MenuWrap key={custom.name} onClick={() => navigate(`${custom.path}`, { state: custom })}>
            <MenuIcon src={custom.svg} />
            <MenuName>{custom.name}</MenuName>
          </MenuWrap>
        ))}
      </MenuListWrap>
    </SearchPageWrap>
  );
};

export default SearchPage;
