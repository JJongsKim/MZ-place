import { LabelText, LikeIcon, ThumbLabel, ThumbWrap, Thumbnail } from './style';
import { ReactComponent as LikeEmpty } from '@assets/like-gray.svg';
import { ReactComponent as LikeFull } from '@assets/like-full.svg';

import defaultImage from '../../../images/default.png';

interface ThumbnailProps {
  data: PlacesType | PlacesOfMap;
  like?: number;
  onClickHeart: () => void;
  onClick?: () => void;
}

const ThumbnailBox = ({ data, like, onClickHeart, onClick }: ThumbnailProps) => {
  return (
    <Thumbnail>
      <ThumbWrap onClick={onClick} $imageSrc={data.image_url} $defaultImageSrc={defaultImage}>
        <ThumbLabel>
          <LabelText>{data.name}</LabelText>
        </ThumbLabel>
      </ThumbWrap>
      <LikeIcon onClick={onClickHeart}>{like ? <LikeFull /> : <LikeEmpty />}</LikeIcon>
    </Thumbnail>
  );
};

export default ThumbnailBox;
