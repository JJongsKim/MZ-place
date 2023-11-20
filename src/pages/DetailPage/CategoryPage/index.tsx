import { useCallback, useEffect, useState } from 'react';

import SearchBar from '@components/common/SearchBar';
import { DetailPageContentList, DetailPageWrap, FilterList } from '../style';
import { COST_FILTER, MENU } from '@application/constant';
import ThumbnailList from '@components/common/ThumbnailList';
import { useGetPlacesOfCategory } from '@hooks/api/places';
import Chip from '@components/common/Chip';
import { useLocation } from 'react-router-dom';
import Loading from '@components/common/Loading';

const CategoryPage = () => {
  const location = useLocation();

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

  const { data, refetch, isLoading, fetchNextPage, hasNextPage } = useGetPlacesOfCategory(
    location.state.id,
    {
      price: selectedCost[0],
    },
  );
  const places = data as PlacesType[];

  useEffect(() => {
    refetch();
  }, [selectedCost]);

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
        {isLoading ? (
          <Loading />
        ) : (
          <ThumbnailList
            places={places}
            isLoading={isLoading}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
        )}
      </DetailPageContentList>
    </DetailPageWrap>
  );
};

export default CategoryPage;
