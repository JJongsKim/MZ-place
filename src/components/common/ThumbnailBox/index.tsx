/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';

import { LabelText, LikeIcon, ThumbLabel, ThumbWrap, Thumbnail } from './style';
import { ReactComponent as LikeEmpty } from '@assets/like-gray.svg';
import { ReactComponent as LikeFull } from '@assets/like-full.svg';
import defaultImage from '../../../images/default.png';

import Toast from '../Toast';
import useToast from '@hooks/useToast';

interface ThumbnailProps {
  data: PlacesType | PlacesOfMap;
  userId?: Record<string, string>;
  like?: number;
  onClickHeart?: () => void;
  onClick?: () => void;
}

const ThumbnailBox = ({ userId, data, like, onClickHeart, onClick }: ThumbnailProps) => {
  const { toast, handleFloatingToast } = useToast();
  const [heartState, setHeartState] = useState(false);

  const handleClickHeart = () => {
    if (userId && Object.keys(userId).length === 0) {
      handleFloatingToast();
    } else {
      setHeartState(!heartState);
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
        <LikeIcon onClick={handleClickHeart}>{heartState ? <LikeFull /> : <LikeEmpty />}</LikeIcon>
      </Thumbnail>
      {toast && <Toast>찜 기능은 로그인 후 이용해주세요!</Toast>}
    </>
  );
};

export default ThumbnailBox;
