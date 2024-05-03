import { useCallback, useEffect, useState } from 'react';

import SearchBar from '@components/common/SearchBar';
import { DetailPageContentList, DetailPageWrap, FilterList } from '../style';
import { BLUERIBBON_FILTER, COST_FILTER, MENU, RATING_FILTER } from '@application/constant';
import ThumbnailList from '@components/common/ThumbnailList';
import { useGetPlacesOfCategory } from '@hooks/api/places';
import Chip from '@components/common/Chip';
import { useLocation } from 'react-router-dom';
import Loading from '@components/common/Loading';

interface CategoryPageProps {
  userId?: Record<string, string>;
}

const CategoryPage = ({ userId }: CategoryPageProps) => {
  const location = useLocation();

  const [selectedCost, setSelectedCost] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<string[]>([]);
  const [selectedRibbon, setSelectedRibbon] = useState<number[]>([]);
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

  const handleSelectedRating = useCallback(
    (selectedItem: string) => {
      const newFilter = new Set<string>(selectedRating);

      if (newFilter.has(selectedItem)) {
        newFilter.delete(selectedItem);
      } else {
        newFilter.clear();
        newFilter.add(selectedItem);
      }

      const returnRating = Array.from(newFilter);
      setSelectedRating(returnRating);
    },
    [selectedRating],
  );

  const handleSelectedRibbon = useCallback(
    (selectedItem: number) => {
      const newFilter = new Set<number>(selectedRibbon);

      if (newFilter.has(selectedItem)) {
        newFilter.delete(selectedItem);
      } else {
        newFilter.clear();
        newFilter.add(selectedItem);
      }

      const returnRibbon = Array.from(newFilter);
      setSelectedRibbon(returnRibbon);
    },
    [selectedRibbon],
  );

  const { data, refetch, isLoading, fetchNextPage, hasNextPage } = useGetPlacesOfCategory(
    location.state.id,
    {
      price: selectedCost[0],
      ribbon: selectedRibbon[0],
      rating: selectedRating[0],
    },
    userId,
  );

  useEffect(() => {
    refetch();
  }, [selectedCost, selectedRating, selectedRibbon]);

  return (
    <DetailPageWrap>
      <SearchBar name={`${location.state.name}`} backIcon={true} />
      {MENU.some(item => item.name === location.state.name) && (
        <FilterList>
          {location.state.name === '맛집/카페' ? (
            <>
              {/* 맛집/카페 카테고리용 블루리본 필터 */}
              {BLUERIBBON_FILTER.map(ribbon => (
                <li key={ribbon.id} onClick={() => handleSelectedRibbon(ribbon.id)}>
                  <Chip
                    value={ribbon.type}
                    size="xsmall"
                    isClicked={selectedRibbon.includes(ribbon.id)}
                  />
                </li>
              ))}
            </>
          ) : (
            <>
              {/* 일반 카테고리용 유료/무료 필터 */}
              {COST_FILTER.map(item => (
                <li key={item.id} onClick={() => handleSelectedCost(item.id)}>
                  <Chip value={item.type} size="small" isClicked={selectedCost.includes(item.id)} />
                </li>
              ))}
            </>
          )}
          {/* 전체 카테고리 적용 별점순 필터 */}
          {RATING_FILTER.map(rat => (
            <li key={rat.id} onClick={() => handleSelectedRating(rat.id)}>
              <Chip value={rat.type} size="small" isClicked={selectedRating.includes(rat.id)} />
            </li>
          ))}
        </FilterList>
      )}
      <DetailPageContentList>
        {isLoading ? (
          <Loading />
        ) : (
          <ThumbnailList
            places={data}
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
