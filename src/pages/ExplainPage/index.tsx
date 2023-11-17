import { ExplainPageWrap, LikeIcon, LocationTitle, ThumbnailBox, ThumbnailBoxWrap } from './style';
import LikeEmpty from '@assets/like-gray.svg';

import { useLocation } from 'react-router-dom';
import SearchBar from '@components/common/SearchBar';
import { useGetInfoByPlaceId } from '@hooks/api/places';
import DefaultExplain from '@components/ExplainPage/DefaultExplain';
import CourseExplain from '@components/ExplainPage/CourseExplain';
import WarningMention from '@components/common/warning';

const ExplainPage = () => {
  const location = useLocation();

  const placeState = useGetInfoByPlaceId(Number(location.pathname.match(/\/place\/(\d+)/)?.[1]));
  const placeInfo = placeState.place as PlaceType | undefined;

  return (
    <ExplainPageWrap>
      <SearchBar name={location.state} backIcon={true} searchIcon={false} />
      <ThumbnailBoxWrap>
        <ThumbnailBox src={placeInfo?.image_url} alt="장소썸네일" />
        <LikeIcon src={LikeEmpty} />
      </ThumbnailBoxWrap>
      <LocationTitle>{location.state}</LocationTitle>
      {placeInfo?.related_course ? (
        <>
          {placeInfo.related_course.length === 0 ? (
            <DefaultExplain placeInfo={placeInfo} />
          ) : (
            <CourseExplain />
          )}
        </>
      ) : (
        <WarningMention text="다시 새로고침 해주세요!" />
      )}
    </ExplainPageWrap>
  );
};

export default ExplainPage;
