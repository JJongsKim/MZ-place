/* eslint-disable @typescript-eslint/no-unused-vars */
import { ACTIVE_TASTE, COST_FILTER, REGION_ARRAY } from '@application/constant';
import {
  CustomFilterForm,
  FilterButtonWrap,
  FilterList,
  FilterTitle,
  FilterTypeContainer,
} from './style';
import Chip from '@components/common/Chip';
import ButtonBase from '@components/common/ButtonBase';
import React, { useCallback, useEffect, useState } from 'react';
import useToast from '@hooks/useToast';
import Toast from '@components/common/Toast';
import { useGetPlacesOfFilter } from '@hooks/api/places';
import { useDispatch } from 'react-redux';
import { setPlacesOfFilter } from '@store/reducers/PlacesOfFilterReducer';

interface CustomFilterProps {
  userId?: Record<string, string>;
}

const CustomFilter = ({ userId }: CustomFilterProps) => {
  const { toast, toastMsg, handleFloatingToast } = useToast();
  const dispatch = useDispatch();

  const [selectedCost, setSelectedCost] = useState<string[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<number[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);

  const { refetch } = useGetPlacesOfFilter(
    {
      price: selectedCost[0],
      filters: selectedActivity.join(','),
      districts: selectedLocation.join(','),
    },
    userId,
  );

  const handleSelectedFilter = useCallback(
    (arrayName: string, selectedItem: string) => {
      if (arrayName === 'cost') {
        const newFilter = new Set<string>(selectedCost);

        if (newFilter.has(selectedItem)) {
          newFilter.delete(selectedItem);
        } else {
          newFilter.clear();
          newFilter.add(selectedItem);
        }

        const returnFilter = Array.from(newFilter);
        setSelectedCost(returnFilter);
      }

      if (arrayName === 'location') {
        const newFilter = new Set<string>(selectedLocation);

        newFilter.has(selectedItem) ? newFilter.delete(selectedItem) : newFilter.add(selectedItem);

        const returnFilter = Array.from(newFilter);
        setSelectedLocation(returnFilter);
      }
    },
    [selectedCost, selectedLocation],
  );

  const handleSelectedActivity = useCallback(
    (activityId: number) => {
      const newFilter = new Set<number>(selectedActivity);

      newFilter.has(activityId) ? newFilter.delete(activityId) : newFilter.add(activityId);

      const returnFilter = Array.from(newFilter);
      setSelectedActivity(returnFilter);
    },
    [selectedActivity],
  );

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 아무 조건을 모두 걸지 않고 적용하기를 누를 시
    if (
      selectedLocation.length === 0 ||
      selectedActivity.length === 0 ||
      selectedLocation.length === 0
    ) {
      handleFloatingToast('필터를 모두 선택 후 적용해주세요!');
    }
    // 조건 걸고 난 후 refetch,
    // refetch된 데이터를 바로 리듀서에 전달
    else {
      await refetch().then(data => {
        const filterData = data.data?.pages.flatMap(page => page.data.result);

        dispatch(setPlacesOfFilter(filterData));
      });
    }
  };

  return (
    <CustomFilterForm onSubmit={handleSubmit}>
      <FilterTypeContainer>
        <FilterTitle>유료/무료 여부</FilterTitle>
        <FilterList>
          {COST_FILTER.map(item => (
            <li key={item.id} onClick={() => handleSelectedFilter('cost', item.id)}>
              <Chip size="small" value={item.type} isClicked={selectedCost?.includes(item.id)} />
            </li>
          ))}
        </FilterList>
      </FilterTypeContainer>
      <FilterTypeContainer>
        <FilterTitle>활동 취향</FilterTitle>
        <FilterList>
          {ACTIVE_TASTE.map(item => (
            <li key={item.id} onClick={() => handleSelectedActivity(item.id)}>
              <Chip
                size="small"
                value={item.name}
                isClicked={selectedActivity?.includes(item.id)}
              />
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
        <ButtonBase name="적용하기" />
      </FilterButtonWrap>
      {toast && <Toast>{toastMsg}</Toast>}
    </CustomFilterForm>
  );
};

export default CustomFilter;
