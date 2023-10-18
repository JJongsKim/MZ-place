import { MINI_FILTER } from '@application/constant';
import SearchBar from '@components/common/SearchBar';
import { useLocation } from 'react-router-dom';

import { DetailPageContentList, DetailPageWrap, FilterList } from './style';
import Chip from '@components/common/Chip';
import ThumbnailList from '@components/common/ThumbnailList';
import BottomSheet from '@components/common/BottomSheet';

const DetailPage = () => {
  const location = useLocation();
  const typeArray = MINI_FILTER.find(filter => filter.type === location.state);

  return (
    <DetailPageWrap>
      <SearchBar name={`${location.state}`} backIcon={true} searchIcon={true} />
      <FilterList>
        {typeArray?.filters.map(filter => (
          <li key={filter}>
            <Chip value={filter} size="small" />
          </li>
        ))}
      </FilterList>
      <DetailPageContentList>
        {location.state === '거리별 추천' || location.state === '맞춤 필터' ? (
          <BottomSheet />
        ) : (
          <ThumbnailList />
        )}
      </DetailPageContentList>
    </DetailPageWrap>
  );
};

export default DetailPage;
