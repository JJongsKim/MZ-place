import { ExplainPageWrap, LikeIcon, LocationTitle, ThumbnailBox, ThumbnailBoxWrap } from './style';
import LikeFull from '@assets/like-full.svg';
import LikeEmpty from '@assets/like-gray.svg';

import { useLocation } from 'react-router-dom';
import SearchBar from '@components/common/SearchBar';
import { useGetInfoByPlaceId } from '@hooks/api/places';
import DefaultExplain from '@components/ExplainPage/DefaultExplain';
import CourseExplain from '@components/ExplainPage/CourseExplain';
import WarningMention from '@components/common/warning';
import useReverseGeoCoding from '@hooks/useReverseGeoCoding';
import Loading from '@components/common/Loading';

interface ExplainPageProps {
  userId: Record<string, string>;
}

const ExplainPage = ({ userId }: ExplainPageProps) => {
  const location = useLocation();

  const { isLoading, data } = useGetInfoByPlaceId(
    Number(location.pathname.match(/\/place\/(\d+)/)?.[1]),
    userId,
  );
  const placeInfo = data?.data.result as PlaceType;

  const address = useReverseGeoCoding({
    latitude: placeInfo?.latitude,
    longitude: placeInfo?.longitude,
    placeId: placeInfo?.id,
  });

  return (
    <ExplainPageWrap>
      <SearchBar name={location.state} backIcon={true} searchIcon={false} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ThumbnailBoxWrap>
            <ThumbnailBox src={placeInfo?.image_url} alt="장소썸네일" />
            {placeInfo.heart === 1 ? <LikeIcon src={LikeFull} /> : <LikeIcon src={LikeEmpty} />}
          </ThumbnailBoxWrap>
          <LocationTitle>{location.state}</LocationTitle>
          {placeInfo?.related_course ? (
            <>
              {placeInfo.related_course.length === 0 ? (
                <DefaultExplain placeInfo={placeInfo} address={address.address} />
              ) : (
                <CourseExplain />
              )}
            </>
          ) : (
            <WarningMention text="다시 새로고침 해주세요!" />
          )}
        </>
      )}
    </ExplainPageWrap>
  );
};

export default ExplainPage;
