import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ExplainPageWrap, LikeIcon, LocationTitle, ThumbnailBox, ThumbnailBoxWrap } from './style';
import { ReactComponent as LikeEmpty } from '@assets/like-gray.svg';
import { ReactComponent as LikeFull } from '@assets/like-full.svg';

import SearchBar from '@components/common/SearchBar';
import { useGetInfoByPlaceId } from '@hooks/api/places';
import DefaultExplain from '@components/ExplainPage/DefaultExplain';
import WarningMention from '@components/common/warning';
import useReverseGeoCoding from '@hooks/useReverseGeoCoding';
import Loading from '@components/common/Loading';
import useToast from '@hooks/useToast';
import Toast from '@components/common/Toast';
import { useDeleteHeart, usePushHeart } from '@hooks/api/heart';
import DEFAULT_IMAGE from '../../images/default.png';

interface ExplainPageProps {
  userId: Record<string, string>;
}

const ExplainPage = ({ userId }: ExplainPageProps) => {
  const location = useLocation();

  const [heartState, setHeartState] = useState(false);
  const { toast, handleFloatingToast } = useToast();

  // 이미지 로딩 실패 시, default 이미지로 대체
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = `${DEFAULT_IMAGE}`;
  };

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

  const { mutate: pushHeartMutation } = usePushHeart();
  const { mutate: deleteHeartMutation } = useDeleteHeart();
  const handleClickHeart = (id: number) => {
    if (userId && Object.keys(userId).length === 0) {
      handleFloatingToast();
    } else {
      // - 일반 상세 | 찜이 눌리지 않은 장소 > 찜 누르기
      if (!heartState) {
        pushHeartMutation({
          args: {
            place_id: id,
          },
          headerArgs: userId!,
        });
        setHeartState(true);
      }
      // - 일반 상세 | 이미 찜이 눌린 장소 > 찜 해제
      if (heartState) {
        deleteHeartMutation({
          args: {
            place_id: id,
          },
          headerArgs: userId!,
        });
        setHeartState(false);
      }
    }
  };

  useEffect(() => {
    if (placeInfo?.heart === 1) {
      setHeartState(true);
    } else {
      setHeartState(false);
    }
  }, [placeInfo?.heart]);

  return (
    <ExplainPageWrap>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SearchBar name={placeInfo?.name} backIcon={true} />
          <ThumbnailBoxWrap>
            <ThumbnailBox src={placeInfo?.image_url} alt="장소썸네일" onError={handleImageError} />
            <LikeIcon onClick={() => handleClickHeart(placeInfo.id)}>
              {heartState ? <LikeFull /> : <LikeEmpty />}
            </LikeIcon>
          </ThumbnailBoxWrap>
          <LocationTitle>{placeInfo?.name}</LocationTitle>
          {placeInfo?.related_course ? (
            <>
              {placeInfo.related_course.length === 0 ? (
                <DefaultExplain placeInfo={placeInfo} address={address.address} />
              ) : (
                <DefaultExplain
                  placeInfo={placeInfo}
                  address={address.address}
                  isRelatedCourse={true}
                />
              )}
            </>
          ) : (
            <WarningMention text="다시 새로고침 해주세요!" />
          )}
        </>
      )}
      {toast && <Toast>찜 기능은 로그인 후 이용해주세요!</Toast>}
    </ExplainPageWrap>
  );
};

export default ExplainPage;
