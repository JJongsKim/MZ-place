import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ACTIVE_TASTE, COST_FILTER, REGION_ARRAY } from '@application/constant';
import * as S from './style';
import Chip from '@components/common/Chip';
import ButtonBase from '@components/common/ButtonBase';
import useToast from '@hooks/useToast';
import Toast from '@components/common/Toast';
import {
  setActivityFilter,
  setCostFilter,
  setLocationFilter,
  setSubmitFilter,
} from '@store/reducers/FilterReducer';

const CustomFilter = () => {
  const dispatch = useDispatch();
  const { toast, toastMsg, handleFloatingToast } = useToast();

  const [selectedCost, setSelectedCost] = useState<string[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<number[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);

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
    } else {
      dispatch(setCostFilter(selectedCost));
      dispatch(setActivityFilter(selectedActivity));
      dispatch(setLocationFilter(selectedLocation));
      dispatch(setSubmitFilter(true));
    }
  };

  return (
    <S.CustomFilterForm onSubmit={handleSubmit}>
      <S.FilterTypeContainer>
        <S.FilterTitle>유료/무료 여부</S.FilterTitle>
        <S.FilterList>
          {COST_FILTER.map(item => (
            <li key={item.id} onClick={() => handleSelectedFilter('cost', item.id)}>
              <Chip size="small" value={item.type} isClicked={selectedCost?.includes(item.id)} />
            </li>
          ))}
        </S.FilterList>
      </S.FilterTypeContainer>
      <S.FilterTypeContainer>
        <S.FilterTitle>활동 취향</S.FilterTitle>
        <S.FilterList>
          {ACTIVE_TASTE.map(item => (
            <li key={item.id} onClick={() => handleSelectedActivity(item.id)}>
              <Chip
                size="small"
                value={item.name}
                isClicked={selectedActivity?.includes(item.id)}
              />
            </li>
          ))}
        </S.FilterList>
      </S.FilterTypeContainer>
      <S.FilterTypeContainer>
        <S.FilterTitle>활동 지역</S.FilterTitle>
        <S.FilterList>
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
        </S.FilterList>
      </S.FilterTypeContainer>
      <S.FilterButtonWrap>
        <ButtonBase name="적용하기" />
      </S.FilterButtonWrap>
      {toast && <Toast>{toastMsg}</Toast>}
    </S.CustomFilterForm>
  );
};

export default CustomFilter;
