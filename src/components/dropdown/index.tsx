import { useState } from 'react';
import {
  DropdownWrap,
  DropdownBtn,
  DropdownBtnWrap,
  DropdownTextWrap,
  DropdownListWrap,
  DropdownList,
} from './style';
import activeBtn from '@assets/dropdown.svg';
import { REGION_ARRAY } from '@application/constant';

const Dropdown = () => {
  const [selectedRegion, setSelectedRegion] = useState('강남구');
  const [clicked, isClicked] = useState(false);

  const handleClickBtn = () => {
    isClicked(!clicked);
  };
  const handleSelectRegion = (region: string) => {
    setSelectedRegion(region);
    isClicked(false);
  };

  // console.log('클릭 확인', clicked);

  return (
    <DropdownWrap>
      <DropdownTextWrap>{selectedRegion}</DropdownTextWrap>
      <DropdownBtnWrap onClick={handleClickBtn}>
        <DropdownBtn src={activeBtn} clicked={clicked} />
      </DropdownBtnWrap>
      {clicked && (
        <DropdownListWrap>
          <DropdownList>
            {REGION_ARRAY.map(item => (
              <li key={item} onClick={() => handleSelectRegion(item)}>
                {item}
              </li>
            ))}
          </DropdownList>
        </DropdownListWrap>
      )}
    </DropdownWrap>
  );
};

export default Dropdown;
