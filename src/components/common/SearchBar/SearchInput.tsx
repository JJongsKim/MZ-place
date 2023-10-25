import { ReactComponent as SearchButton } from '@assets/search.svg';
import { useState } from 'react';

import { styled } from 'styled-components';

interface SearchInputProps {
  searchIcon?: boolean;
}

const SearchInput = ({ searchIcon }: SearchInputProps) => {
  const [searchWord, setSearchWord] = useState('');
  const handleChangeForm = (value: string) => {
    setSearchWord(value);
  };

  return (
    <SearchInputWrap>
      <InputBase
        name="searchInput"
        value={searchWord}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeForm(e.target.value)}
      />
      {searchIcon && (
        <SearchIcon>
          <SearchButton />
        </SearchIcon>
      )}
    </SearchInputWrap>
  );
};

const SearchInputWrap = styled.form`
  display: flex;
  align-items: center;
  margin-right: 15px;
  padding: 0 5px;
  height: 32px;
  background-color: white;
  border-radius: 10px;
`;

const InputBase = styled.input`
  width: 50px;
  height: 28px;
  padding: 0 30px 0 10px;
  border: none;
  border-bottom: 1px solid #eee;
  background-color: transparent;
  transition: width 1s;

  &:focus {
    width: 165px;
    cursor: text;

    @media screen and (min-width: 1200px) {
      width: 250px;
    }
  }
`;

const SearchIcon = styled.div`
  cursor: pointer;

  svg {
    fill: #606060;
  }
`;
export default SearchInput;
