import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

import CustomFilter from '@components/CustomFilter';
import BottomSheet from '@components/common/BottomSheet';
import ThumbnailList from '@components/common/ThumbnailList';
import WarningMention from '@components/common/warning';
import { DetailPageWrap } from '../style';
import SearchBar from '@components/common/SearchBar';
import { useGetPlacesOfFilter } from '@hooks/api/places';

interface CustomFilterPageProps {
  userId?: Record<string, string>;
}

const CustomFilterPage = ({ userId }: CustomFilterPageProps) => {
  const location = useLocation();
  const { costFilter, activityFilter, locationFilter, submitFilter } = useSelector(
    (state: StoreType) => state.FilterReducer,
  );

  const { data, isLoading, isError, refetch, fetchNextPage, hasNextPage } = useGetPlacesOfFilter(
    {
      price: costFilter[0],
      filters: activityFilter.join(','),
      districts: locationFilter.join(','),
    },
    userId,
  );

  useEffect(() => {
    const fetchData = async () => {
      await refetch();
    };

    fetchData();
  }, [costFilter, activityFilter, locationFilter]);

  return (
    <DetailPageWrap>
      <SearchBar name={`${location.state.name}`} backIcon={true} />
      <CustomFilterPageWrap>
        {costFilter.length === 0 && activityFilter.length === 0 && locationFilter.length === 0 ? (
          <WarningMention text="필터를 선택해주세요!" />
        ) : data?.length === 0 || isError ? (
          <WarningMention text="해당 필터에 맞는 장소가 없어요!" />
        ) : (
          <ThumbnailList
            places={data}
            isLoading={isLoading}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
        )}
        <BottomSheet submitState={submitFilter}>
          <CustomFilter />
        </BottomSheet>
      </CustomFilterPageWrap>
    </DetailPageWrap>
  );
};

const CustomFilterPageWrap = styled.div`
  width: 375px;
  height: 900px;
  overflow: scroll;
`;

export default CustomFilterPage;
