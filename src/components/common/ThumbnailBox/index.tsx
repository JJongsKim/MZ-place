import { LabelText, LikeIcon, ThumbLabel, ThumbWrap } from './style';
import LikeEmpty from '@assets/like-empty.svg';
import LikeFull from '@assets/like-full.svg';

interface ThumbnailProps {
  label: string;
  like: boolean;
}

const ThumbnailBox = ({ label, like }: ThumbnailProps) => {
  return (
    <ThumbWrap>
      <ThumbLabel>
        <LabelText>{label}</LabelText>
      </ThumbLabel>
      {like ? <LikeIcon src={LikeFull} /> : <LikeIcon src={LikeEmpty} />}
    </ThumbWrap>
  );
};

export default ThumbnailBox;
