import { COST_FILTER, MENU } from '@application/constant';
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
import DropDown from '@components/common/DropDown';
import { useCallback, useState } from 'react';

const DetailPage = () => {
  const location = useLocation();
  const store = useSelector((state: StoreType) => state);

  const [selectedCost, setSelectedCost] = useState<string[]>([]);
  const handleSelectedCost = useCallback(
    (selectedItem: string) => {
      const newFilter = new Set<string>(selectedCost);

      if (newFilter.has(selectedItem)) {
        newFilter.delete(selectedItem);
      } else {
        newFilter.clear();
        newFilter.add(selectedItem);
      }

      const returnFilter = Array.from(newFilter);
      setSelectedCost(returnFilter);
    },
    [selectedCost],
  );

  return (
    <DetailPageWrap>
      <SearchBar name={`${location.state}`} backIcon={true} searchIcon={true} />
      {MENU.some(item => item.name === location.state) && (
        <FilterList>
          {COST_FILTER.map(item => (
            <li key={item.id} onClick={() => handleSelectedCost(item.id)}>
              <Chip value={item.type} size="small" isClicked={selectedCost?.includes(item.id)} />
            </li>
          ))}
        </FilterList>
      )}
      <DetailPageContentList>
        {location.state === '거리별 추천' ? (
          <MapPageWrap>
            <MapPageDropdownWrap>
              <DropDown currentAddress={store.LocationReducer.currentAddress} />
            </MapPageDropdownWrap>
            <Map currentAddress={store.LocationReducer.currentAddress} />
            <BottomSheet>
              <ThumbnailList />
            </BottomSheet>
          </MapPageWrap>
        ) : location.state === '맞춤 필터' ? (
          <CustomFilterPageWrap>
            {store.PlacesReducer.placesResult === undefined ? (
              <WarningMention text="필터를 선택해주세요!" />
            ) : (
              <ThumbnailList places={store.PlacesReducer.placesResult} />
            )}
            <BottomSheet>
              <CustomFilter />
            </BottomSheet>
          </CustomFilterPageWrap>
        ) : (
          <ThumbnailList places={store.CategoryReducer.categoryPlaces} />
        )}
      </DetailPageContentList>
    </DetailPageWrap>
  );
};

export default DetailPage;
