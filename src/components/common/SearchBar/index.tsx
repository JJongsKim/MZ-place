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

interface SearchBarProps {
  name: string;
  backIcon?: boolean;
}

const SearchBar = ({ name, backIcon }: SearchBarProps) => {
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
      </SearchBarItemWrap>
      <SearchBarLine />
    </SearchBarWrap>
  );
};

export default SearchBar;
