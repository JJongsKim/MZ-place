import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { NextFetchTarget, ThumbnailContentArea, ThumbnailListWrap } from './style';
import ThumbnailBox from '../ThumbnailBox';
import RecentViewPlaces from '@hooks/localStorage/RecentViewPlaces';

interface ThumbnailListProps {
  recentView?: boolean;
  places?: PlacesType[] | PlacesOfMap[];
  isLoading?: boolean;
  totalPlaces?: number;
  hasNextPage?: boolean;
  fetchNextPage?: () => void;
}

const MAX_RECENT_PLACES = 20;

/*
  - 장소 썸네일에 대한 정보 전달
  - 로그인 여부에 따른 찜 API 연결
  - 미래유산코스 썸네일-상세 페이지 찜 기능 제거
*/
const ThumbnailList = ({
  recentView,
  places,
  isLoading,
  hasNextPage,
  fetchNextPage,
}: ThumbnailListProps) => {
  const naviagate = useNavigate();
  const { handleGetRecentPlaces, handleSaveRecentPlace } = RecentViewPlaces();

  const userId = useSelector((state: StoreType) => state.UserIdReducer.userId);
  const nextFetchTargetRef = useRef<HTMLDivElement | null>(null);

  /*
    - 장소 상세보기로 이동
    - 최근 조회 장소 업데이트
  */
  const handleClickThumb = (data: PlacesType) => {
    const recentPlaces: RecentPlacesType[] = handleGetRecentPlaces();
    const updatedRecentPlaces = recentPlaces.filter(place => place.id !== data.id);

    if (location.pathname === '/search/course' || data.type === 'course') {
      naviagate(`/course/${data.id}`, { state: data });

      updatedRecentPlaces.push({
        id: data.id,
        image_url: data.image_url,
        name: data.name,
        type: 'course',
      });
    } else {
      naviagate(`/place/${data.id}`, { state: data });

      updatedRecentPlaces.push({
        id: data.id,
        image_url: data.image_url,
        name: data.name,
        type: 'place',
      });
    }

    if (updatedRecentPlaces.length > MAX_RECENT_PLACES) {
      updatedRecentPlaces.shift();
    }
    handleSaveRecentPlace(updatedRecentPlaces);
  };

  // 데이터 무한스크롤
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const fetchCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage?.();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(fetchCallback, options);

    if (nextFetchTargetRef.current) {
      observer.observe(nextFetchTargetRef.current);
    }

    return () => {
      if (nextFetchTargetRef.current) {
        observer.unobserve(nextFetchTargetRef.current);
      }
    };
  }, [places]);

  return places && places.length !== 0 ? (
    <ThumbnailListWrap>
      <ThumbnailContentArea>
        {places.map(data => (
          <ThumbnailBox
            userId={userId}
            key={data.id}
            data={data}
            like={data.heart === 1 ? true : false}
            recentView={recentView || data.type === 'course' ? true : null}
            onClick={() => handleClickThumb(data)}
          />
        ))}
      </ThumbnailContentArea>
      {!isLoading && hasNextPage && (
        <NextFetchTarget ref={nextFetchTargetRef}>• • •</NextFetchTarget>
      )}
    </ThumbnailListWrap>
  ) : null;
};

export default ThumbnailList;
