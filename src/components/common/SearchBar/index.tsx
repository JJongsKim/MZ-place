import {
  SearchBarLine,
  SearchBarWrap,
  TitleText,
  BackIcon,
  SearchIcon,
  SearchBarItemWrap,
  SearchBarTitleWrap,
} from './style';

import back from '@assets/back-icon.svg';
import search from '@assets/search.svg';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  name: string;
  backIcon?: boolean;
  searchIcon?: boolean;
}

const SearchBar = ({ name, backIcon, searchIcon }: SearchBarProps) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <SearchBarWrap>
      <SearchBarItemWrap>
        <SearchBarTitleWrap>
          {backIcon && <BackIcon src={back} alt="뒤로가기" onClick={handleGoBack} />}
          <TitleText>{name}</TitleText>
        </SearchBarTitleWrap>
        {searchIcon && <SearchIcon src={search} alt="검색버튼" />}
        <SearchBarLine />
      </SearchBarItemWrap>
    </SearchBarWrap>
  );
};

export default SearchBar;
