import { useState } from 'react';
import activeBtn from '@assets/dropdown.svg';
import { REGION_ARRAY } from '@application/constant';
import {
  DropdownBtn,
  DropdownBtnWrap,
  DropdownList,
  DropdownListWrap,
  DropdownTextWrap,
  DropdownWrap,
} from './style';
import { useDispatch } from 'react-redux';
import { setLocation } from '@store/reducers/LocationReducer';

interface DropdownProps {
  currentAddress: string;
}

const DropDown = ({ currentAddress }: DropdownProps) => {
  const dispatch = useDispatch();
  const [clicked, isClicked] = useState(false);

  const handleClickBtn = () => {
    isClicked(!clicked);
  };
  const handleSelectRegion = (region: string) => {
    dispatch(setLocation(region));
    isClicked(false);
  };

  return (
    <DropdownWrap>
      <DropdownTextWrap>{currentAddress}</DropdownTextWrap>
      <DropdownBtnWrap onClick={handleClickBtn}>
        <DropdownBtn src={activeBtn} $clicked={clicked} />
      </DropdownBtnWrap>
      {clicked && (
        <DropdownListWrap>
          <DropdownList>
            {REGION_ARRAY.map(item => (
              <li key={item.locationId} onClick={() => handleSelectRegion(item.locationName)}>
                {item.locationName}
              </li>
            ))}
          </DropdownList>
        </DropdownListWrap>
      )}
    </DropdownWrap>
  );
};

export default DropDown;
