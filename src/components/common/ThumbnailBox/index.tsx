import { useEffect, useState } from 'react';

import { LabelText, LikeIcon, ThumbLabel, ThumbWrap, Thumbnail } from './style';
import { ReactComponent as LikeEmpty } from '@assets/like-gray.svg';
import { ReactComponent as LikeFull } from '@assets/like-full.svg';
import defaultImage from '../../../images/default.png';

import Toast from '../Toast';
import useToast from '@hooks/useToast';
import { useDeleteHeart, usePushHeart } from '@hooks/api/heart';

interface ThumbnailProps {
  data: PlacesType | PlacesOfMap;
  userId?: Record<string, string>;
  like?: number;
  onClick?: () => void;
}

const ThumbnailBox = ({ userId, data, like, onClick }: ThumbnailProps) => {
  const { toast, handleFloatingToast } = useToast();
  const [heartState, setHeartState] = useState(false);

  const { mutate: pushHeartMutation } = usePushHeart();
  const { mutate: deleteHeartMutation } = useDeleteHeart();
  const handleClickHeart = (id: number) => {
    if (userId && Object.keys(userId).length === 0) {
      handleFloatingToast();
    } else {
      if (location.pathname === '/search/course') {
        // - 코스 | 찜이 눌리지 않은 장소 > 찜 누르기
        if (!heartState) {
          pushHeartMutation({
            args: {
              type: 'c',
              course_id: id,
            },
            headerArgs: userId!,
          });
          setHeartState(true);
        }
        // - 코스 | 이미 찜이 눌린 장소 > 찜 해제
        if (heartState) {
          deleteHeartMutation({
            args: {
              type: 'c',
              course_id: id,
            },
            headerArgs: userId!,
          });
          setHeartState(false);
        }
      } else {
        // - 일반 | 찜이 눌리지 않은 장소 > 찜 누르기
        if (!heartState) {
          pushHeartMutation({
            args: {
              type: 'p',
              place_id: id,
            },
            headerArgs: userId!,
          });
          setHeartState(true);
        }
        // - 일반 | 이미 찜이 눌린 장소 > 찜 해제
        if (heartState) {
          deleteHeartMutation({
            args: {
              type: 'p',
              place_id: id,
            },
            headerArgs: userId!,
          });
          setHeartState(false);
        }
      }
    }
  };

  useEffect(() => {
    if (like === 1) {
      setHeartState(true);
    } else {
      setHeartState(false);
    }
  }, []);

  return (
    <>
      <Thumbnail>
        <ThumbWrap onClick={onClick} $imageSrc={data.image_url} $defaultImageSrc={defaultImage}>
          <ThumbLabel>
            <LabelText>{data.name}</LabelText>
          </ThumbLabel>
        </ThumbWrap>
        <LikeIcon onClick={() => handleClickHeart(data.id)}>
          {heartState ? <LikeFull /> : <LikeEmpty />}
        </LikeIcon>
      </Thumbnail>
      {toast && <Toast>찜 기능은 로그인 후 이용해주세요!</Toast>}
    </>
  );
};

export default ThumbnailBox;
