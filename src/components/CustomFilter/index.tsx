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
  const [selectedCost, setSelectedCost] = useState<string[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);

  const handleSelectedFilter = useCallback(
    (arrayName: string, selectedItem: string) => {
      if (arrayName === 'cost') {
        const newFilter = new Set<string>(selectedCost);

        newFilter.has(selectedItem) ? newFilter.delete(selectedItem) : newFilter.add(selectedItem);
        const returnFilter = Array.from(newFilter);
        setSelectedCost(returnFilter);
      }
      if (arrayName === 'activity') {
        const newFilter = new Set<string>(selectedActivity);

        newFilter.has(selectedItem) ? newFilter.delete(selectedItem) : newFilter.add(selectedItem);
        const returnFilter = Array.from(newFilter);
        setSelectedActivity(returnFilter);
      }
      if (arrayName === 'location') {
        const newFilter = new Set<string>(selectedLocation);

        newFilter.has(selectedItem) ? newFilter.delete(selectedItem) : newFilter.add(selectedItem);
        const returnFilter = Array.from(newFilter);
        setSelectedLocation(returnFilter);
      }
    },
    [selectedCost, selectedActivity, selectedLocation],
  );

  return (
    <CustomFilterWrap>
      <FilterTypeContainer>
        <FilterTitle>유료/무료 여부</FilterTitle>
        <FilterList>
          {MINI_FILTER[0].filters.map(item => (
            <li key={item} onClick={() => handleSelectedFilter('cost', item)}>
              <Chip size="small" value={item} isClicked={selectedCost?.includes(item)} />
            </li>
          ))}
        </FilterList>
      </FilterTypeContainer>
      <FilterTypeContainer>
        <FilterTitle>활동 취향</FilterTitle>
        <FilterList>
          {ACTIVE_TASTE.map(item => (
            <li key={item} onClick={() => handleSelectedFilter('activity', item)}>
              <Chip size="small" value={item} isClicked={selectedActivity?.includes(item)} />
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
                <li
                  key={item.locationId}
                  onClick={() => handleSelectedFilter('location', item.locationName)}
                >
                  <Chip
                    size="small"
                    value={item.locationName}
                    isClicked={selectedLocation?.includes(item.locationName)}
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
