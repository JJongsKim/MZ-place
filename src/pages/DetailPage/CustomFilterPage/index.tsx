import { styled } from 'styled-components';

import CustomFilter from '@components/CustomFilter';
import BottomSheet from '@components/common/BottomSheet';
import ThumbnailList from '@components/common/ThumbnailList';
import WarningMention from '@components/common/warning';
import { DetailPageWrap } from '../style';
import SearchBar from '@components/common/SearchBar';
import { useLocation } from 'react-router-dom';
import { useGetPlacesOfFilter } from '@hooks/api/places';

interface CustomFilterPageProps {
  userId?: Record<string, string>;
}

const CustomFilterPage = ({ userId }: CustomFilterPageProps) => {
  const location = useLocation();
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetPlacesOfFilter();

  return (
    <DetailPageWrap>
      <SearchBar name={`${location.state.name}`} backIcon={true} searchIcon={true} />
      <CustomFilterPageWrap>
        {data === undefined ? (
          <WarningMention text="필터를 선택해주세요!" />
        ) : data.length === 0 ? (
          <WarningMention text="해당 필터에 맞는 장소가 없어요!" />
        ) : (
          <ThumbnailList
            places={data}
            isLoading={isLoading}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
        )}
        <BottomSheet>
          <CustomFilter userId={userId} />
        </BottomSheet>
      </CustomFilterPageWrap>
    </DetailPageWrap>
  );
};

const CustomFilterPageWrap = styled.div`
  width: 375px;
`;

export default CustomFilterPage;
