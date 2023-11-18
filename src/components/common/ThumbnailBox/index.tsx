import { LabelText, LikeIcon, ThumbLabel, ThumbWrap } from './style';
import { ReactComponent as LikeEmpty } from '@assets/like-gray.svg';
import { ReactComponent as LikeFull } from '@assets/like-full.svg';

import defaultImage from '../../../images/default.png';

interface ThumbnailProps {
  data: PlacesType;
  like?: boolean;
  onClick?: () => void;
}

const ThumbnailBox = ({ data, like, onClick }: ThumbnailProps) => {
  return (
    <ThumbWrap onClick={onClick} $imageSrc={data.image_url} $defaultImageSrc={defaultImage}>
      <ThumbLabel>
        <LabelText>{data.name}</LabelText>
      </ThumbLabel>
      {like ? (
        <LikeIcon>
          <LikeFull />
        </LikeIcon>
      ) : (
        <LikeIcon>
          <LikeEmpty />
        </LikeIcon>
      )}
    </ThumbWrap>
  );
};

export default ThumbnailBox;
