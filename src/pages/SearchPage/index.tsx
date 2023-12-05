import { useNavigate } from 'react-router-dom';

import {
  MenuDivideLine,
  MenuIcon,
  MenuListWrap,
  MenuName,
  MenuWrap,
  SearchPageWrap,
} from './style';
import { CUSTOM_MENU, MENU } from '@application/constant';
import { useGetPlacesOfHeart } from '@hooks/api/heart';
import SearchBar from '@components/common/SearchBar';
import { useEffect } from 'react';

interface SearchPageProps {
  userId: Record<string, string>;
}

const SearchPage = ({ userId }: SearchPageProps) => {
  const navigate = useNavigate();
  const { data, refetch } = useGetPlacesOfHeart(userId);

  const handleMoveCustomMenu = (
    customPath: string,
    custom: {
      name: string;
      svg: string;
      path: string;
    },
  ) => {
    if (custom.name === '찜 기반 추천') {
      navigate(`${customPath}`, {
        state: {
          likeLength: data.length,
          custom,
        },
      });
    } else {
      navigate(`${customPath}`, { state: custom });
    }
  };

  useEffect(() => {
    refetch();
  }, []);

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
          <MenuWrap key={custom.name} onClick={() => handleMoveCustomMenu(custom.path, custom)}>
            <MenuIcon src={custom.svg} />
            <MenuName>{custom.name}</MenuName>
          </MenuWrap>
        ))}
      </MenuListWrap>
    </SearchPageWrap>
  );
};

export default SearchPage;
