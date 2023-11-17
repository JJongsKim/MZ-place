import {
  SearchBarLine,
  SearchBarWrap,
  TitleText,
  BackIcon,
  SearchBarItemWrap,
  SearchBarTitleWrap,
} from './style';

import back from '@assets/back-icon.svg';
import { useNavigate } from 'react-router-dom';
import SearchInput from './SearchInput';

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
        {searchIcon ? <SearchInput searchIcon={searchIcon} /> : null}
      </SearchBarItemWrap>
      <SearchBarLine />
    </SearchBarWrap>
  );
};

export default SearchBar;
