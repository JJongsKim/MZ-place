import { useNavigate } from 'react-router-dom';

import * as S from './style';
import { CUSTOM_MENU, MENU } from '@application/constant';
import { useGetPlacesOfHeart } from '@hooks/api/heart';
import SearchBar from '@components/common/SearchBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setCostOfCategory,
  setRatingOfCategory,
  setRibbonOfCategory,
} from '@store/reducers/PlacesOfFilterReducer';

interface SearchPageProps {
  userId: Record<string, string>;
}

const SearchPage = ({ userId }: SearchPageProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    dispatch(setCostOfCategory([]));
    dispatch(setRatingOfCategory([]));
    dispatch(setRibbonOfCategory([]));
  }, []);

  return (
    <S.SearchPageWrap>
      <SearchBar name="실외활동 탐색" />
      <S.MenuListWrap>
        {MENU.map(menu => (
          <S.MenuWrap key={menu.id} onClick={() => navigate(`${menu.path}`, { state: menu })}>
            <S.MenuIcon src={menu.svg} />
            <S.MenuName>{menu.name}</S.MenuName>
          </S.MenuWrap>
        ))}
      </S.MenuListWrap>
      <S.MenuDivideLine />
      <S.MenuListWrap>
        {CUSTOM_MENU.map(custom => (
          <S.MenuWrap key={custom.name} onClick={() => handleMoveCustomMenu(custom.path, custom)}>
            <S.MenuIcon src={custom.svg} />
            <S.MenuName>{custom.name}</S.MenuName>
          </S.MenuWrap>
        ))}
      </S.MenuListWrap>
    </S.SearchPageWrap>
  );
};

export default SearchPage;
