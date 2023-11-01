import { ACTIVE_TASTE, MINI_FILTER, REGION_ARRAY } from '@application/constant';
import {
  CustomFilterWrap,
  FilterButtonWrap,
  FilterList,
  FilterTitle,
  FilterTypeContainer,
} from './style';
import Chip from '@components/common/Chip';
import ButtonBase from '@components/common/ButtonBase';
import { useCallback, useState } from 'react';

const CustomFilter = () => {
  // TODO 임시로 종류별로 따로받는 코드로 작성
  // TODO 백엔드 나오는대로 변경하기

  // TODO 코드 중복이 심해서 줄일 수 있는 방법 생각하기 -> hook으로 만들기?
  const [selectedCost, setSelectedCost] = useState(new Set());
  const [selectedActivity, setSelectedActivity] = useState(new Set());
  const [selectedLocation, setSelectedLocation] = useState(new Set());

  const handleSelectCost = useCallback(
    (selectedItem: string) => {
      const newFilter = new Set(selectedCost);
      newFilter.has(selectedItem) ? newFilter.delete(selectedItem) : newFilter.add(selectedItem);
      setSelectedCost(newFilter);
    },
    [selectedCost],
  );

  const handleSelectActivity = useCallback(
    (selectedItem: string) => {
      const newFilter = new Set(selectedActivity);
      newFilter.has(selectedItem) ? newFilter.delete(selectedItem) : newFilter.add(selectedItem);
      setSelectedActivity(newFilter);
    },
    [selectedActivity],
  );

  const handleSelectLocation = useCallback(
    (selectedItem: string) => {
      const newFilter = new Set(selectedLocation);
      newFilter.has(selectedItem) ? newFilter.delete(selectedItem) : newFilter.add(selectedItem);
      setSelectedLocation(newFilter);
    },
    [selectedLocation],
  );

  console.log('[유료/무료]:', selectedCost);
  console.log('[활동취향]:', selectedActivity);
  console.log('[활동지역]:', selectedLocation);

  return (
    <CustomFilterWrap>
      <FilterTypeContainer>
        <FilterTitle>유료/무료 여부</FilterTitle>
        <FilterList>
          {MINI_FILTER[0].filters.map(item => (
            <li key={item} onClick={() => handleSelectCost(item)}>
              <Chip size="small" value={item} isClicked={selectedCost.has(item)} />
            </li>
          ))}
        </FilterList>
      </FilterTypeContainer>
      <FilterTypeContainer>
        <FilterTitle>활동 취향</FilterTitle>
        <FilterList>
          {ACTIVE_TASTE.map(item => (
            <li key={item} onClick={() => handleSelectActivity(item)}>
              <Chip size="small" value={item} isClicked={selectedActivity.has(item)} />
            </li>
          ))}
        </FilterList>
      </FilterTypeContainer>
      <FilterTypeContainer>
        <FilterTitle>활동 지역</FilterTitle>
        <FilterList>
          {REGION_ARRAY.map(
            item =>
              item.locationName !== '현 위치' && (
                <li key={item.locationId} onClick={() => handleSelectLocation(item.locationName)}>
                  <Chip
                    size="small"
                    value={item.locationName}
                    isClicked={selectedLocation.has(item.locationName)}
                  />
                </li>
              ),
          )}
        </FilterList>
      </FilterTypeContainer>
      <FilterButtonWrap>
        <ButtonBase type="button" name="적용하기" />
      </FilterButtonWrap>
    </CustomFilterWrap>
  );
};

export default CustomFilter;
