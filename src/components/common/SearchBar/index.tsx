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

interface SearchBarProps {
  name: string;
  backIcon?: boolean;
  searchIcon?: boolean;
}

const SearchBar = ({ name, backIcon, searchIcon }: SearchBarProps) => {
  return (
    <SearchBarWrap>
      <SearchBarItemWrap>
        <SearchBarTitleWrap>
          {backIcon && <BackIcon src={back} alt="뒤로가기" />}
          <TitleText>{name}</TitleText>
        </SearchBarTitleWrap>
        {searchIcon && <SearchIcon src={search} alt="검색버튼" />}
        <SearchBarLine />
      </SearchBarItemWrap>
    </SearchBarWrap>
  );
};

export default SearchBar;
