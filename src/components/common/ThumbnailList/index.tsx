/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { NextFetchTarget, ThumbnailContentArea, ThumbnailListWrap } from './style';
import ThumbnailBox from '../ThumbnailBox';
import RecentViewPlaces from '@hooks/localStorage/RecentViewPlaces';
import useToast from '@hooks/useToast';
import Toast from '../Toast';
import { useDeleteHeart, usePushHeart } from '@hooks/api/heart';

interface ThumbnailListProps {
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
    1. Course 장소일땐 body type: 'c'
    2. Course 이외 장소일땐 body type: 'p'
    3. 메인페이지에서는 전달해주는 type에 따라 'c', 'p'나누기
*/
const ThumbnailList = ({ places, isLoading, hasNextPage, fetchNextPage }: ThumbnailListProps) => {
  const naviagate = useNavigate();
  const { handleGetRecentPlaces, handleSaveRecentPlace } = RecentViewPlaces();

  const userId = useSelector((state: StoreType) => state.UserIdReducer.userId);
  const nextFetchTargetRef = useRef<HTMLDivElement | null>(null);

  /*
    - 장소 상세보기로 이동
    - 최근 조회 장소 업데이트
  */
  const handleClickThumb = (data: PlacesType) => {
    naviagate(`/place/${data.id}`, { state: data.name });

    const recentPlaces: PlacesType[] = handleGetRecentPlaces();
    const updatedRecentPlaces = recentPlaces.filter(place => place.id !== data.id);

    updatedRecentPlaces.push({
      heart: data.heart,
      id: data.id,
      image_url: data.image_url,
      name: data.name,
    });

    if (updatedRecentPlaces.length > MAX_RECENT_PLACES) {
      updatedRecentPlaces.shift();
    }

    handleSaveRecentPlace(updatedRecentPlaces);
  };

  // const { mutate: pushHeartMutation } = usePushHeart();
  // const { mutate: deleteHeartMutation } = useDeleteHeart();

  // const handleClickHeart = (id: number, heartState: number) => {
  //   if (Object.keys(userId).length === 0) {
  //     handleFloatingToast();
  //   } else {
  //     if (location.pathname === '/search/course') {
  //       // - 코스 | 찜이 눌리지 않은 장소
  //       if (heartState === 0) {
  //         pushHeartMutation({
  //           args: {
  //             type: 'c',
  //             course_id: id,
  //           },
  //           headerArgs: userId,
  //         });
  //       }
  //       // - 코스 | 이미 찜이 눌린 장소
  //       if (heartState === 1) {
  //         deleteHeartMutation({
  //           args: {
  //             type: 'c',
  //             course_id: id,
  //           },
  //           headerArgs: userId,
  //         });
  //       }
  //     } else {
  //       // - 일반 | 찜이 눌리지 않은 장소
  //       if (heartState === 0) {
  //         pushHeartMutation({
  //           args: {
  //             type: 'p',
  //             place_id: id,
  //           },
  //           headerArgs: userId,
  //         });
  //       }
  //       // - 일반 | 이미 찜이 눌린 장소
  //       if (heartState === 1) {
  //         deleteHeartMutation({
  //           args: {
  //             type: 'p',
  //             place_id: id,
  //           },
  //           headerArgs: userId,
  //         });
  //       }
  //     }
  //   }
  // };

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
            like={data.heart}
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
