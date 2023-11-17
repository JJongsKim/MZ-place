/* eslint-disable @typescript-eslint/no-unused-vars */
import { ExplainPageWrap, LikeIcon, LocationTitle, ThumbnailBox, ThumbnailBoxWrap } from './style';
import test from '../../images/IMG_9904.jpg';

import { useLocation } from 'react-router-dom';
import { ReactComponent as LikeEmpty } from '@assets/like-empty.svg';
import useToast from '@hooks/useToast';
import SearchBar from '@components/common/SearchBar';
import Toast from '@components/common/Toast';
import { useGetInfoByPlaceId } from '@hooks/api/places';
import DefaultExplain from '@components/ExplainPage/DefaultExplain';
import CourseExplain from '@components/ExplainPage/CourseExplain';

const ExplainPage = () => {
  const location = useLocation();
  const { toast, handleFloatingToast } = useToast();

  const placeState = useGetInfoByPlaceId(Number(location.pathname.match(/\/place\/(\d+)/)?.[1]));
  const placeInfo = placeState.place as PlaceType;

  return (
    <ExplainPageWrap>
      <SearchBar name={location.state} backIcon={true} searchIcon={false} />
      <ThumbnailBoxWrap>
        <ThumbnailBox src={test} alt="장소썸네일" />
        <LikeIcon>
          <LikeEmpty />
        </LikeIcon>
      </ThumbnailBoxWrap>
      <LocationTitle>{location.state}</LocationTitle>
      {placeInfo.related_course?.length === 0 ? (
        <DefaultExplain placeInfo={placeInfo} />
      ) : (
        <CourseExplain />
      )}
      {toast && <Toast>클립보드에 복사되었습니다!</Toast>}
    </ExplainPageWrap>
  );
};

export default ExplainPage;
