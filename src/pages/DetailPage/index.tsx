import { MINI_FILTER } from '@application/constant';
import SearchBar from '@components/common/SearchBar';
import { useLocation } from 'react-router-dom';

import {
  CustomFilterPageWrap,
  DetailPageContentList,
  DetailPageWrap,
  FilterList,
  MapPageDropdownWrap,
  MapPageWrap,
} from './style';
import Chip from '@components/common/Chip';
import ThumbnailList from '@components/common/ThumbnailList';
import BottomSheet from '@components/common/BottomSheet';
import Map from '@components/Map';
import CustomFilter from '@components/CustomFilter';
import WarningMention from '@components/common/warning';
import { useSelector } from 'react-redux';
import type { StoreType } from '@/types/index';

const DetailPage = () => {
  const location = useLocation();
  const typeArray = MINI_FILTER.find(filter => filter.type === location.state);
  const store = useSelector((state: StoreType) => state);

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
        {location.state === '거리별 추천' ? (
          <MapPageWrap>
            <MapPageDropdownWrap>
              {/* <DropDown currentAddress={store.LocationReducer.currentAddress} /> */}
            </MapPageDropdownWrap>
            <Map currentAddress={store.LocationReducer.currentAddress} />
            <BottomSheet>
              <ThumbnailList />
            </BottomSheet>
          </MapPageWrap>
        ) : location.state === '맞춤 필터' ? (
          <CustomFilterPageWrap>
            {/* TODO API 연결할 때, 필터가 선택되어 있지 않을 시에 대한 조건 제대로 설정하기*/}
            <WarningMention text="필터를 선택해주세요!" />
            <BottomSheet>
              <CustomFilter />
            </BottomSheet>
          </CustomFilterPageWrap>
        ) : (
          <ThumbnailList />
        )}
      </DetailPageContentList>
    </DetailPageWrap>
  );
};

export default DetailPage;
