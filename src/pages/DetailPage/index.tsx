import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { COST_FILTER, MENU } from '@application/constant';
import SearchBar from '@components/common/SearchBar';

import { DetailPageContentList, DetailPageWrap, FilterList } from './style';
import Chip from '@components/common/Chip';
import ThumbnailList from '@components/common/ThumbnailList';
import { useGetPlacesOfCategory } from '@hooks/api/places';
import CustomFilterPage from './CustomFilterPage';
import MapPage from './MapPage';

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

  const { data, isLoading } = useGetPlacesOfCategory(location.state.id, { price: selectedCost[0] });
  const places = data?.data.result as PlacesType[];

  return (
    <DetailPageWrap>
      <SearchBar name={`${location.state.name}`} backIcon={true} searchIcon={true} />
      {MENU.some(item => item.name === location.state.name) && (
        <FilterList>
          {COST_FILTER.map(item => (
            <li key={item.id} onClick={() => handleSelectedCost(item.id)}>
              <Chip value={item.type} size="small" isClicked={selectedCost?.includes(item.id)} />
            </li>
          ))}
        </FilterList>
      )}
      <DetailPageContentList>
        {location.state.name === '거리별 추천' ? (
          <MapPage address={store.LocationReducer.currentAddress} />
        ) : location.state.name === '맞춤 필터' ? (
          <CustomFilterPage places={store.PlacesReducer.placesResult} />
        ) : (
          <ThumbnailList places={places} isLoading={isLoading} />
        )}
      </DetailPageContentList>
    </DetailPageWrap>
  );
};

export default DetailPage;
