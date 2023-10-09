import { LabelText, LikeIcon, ThumbLabel, ThumbWrap } from './style';
import LikeEmpty from '@assets/like-empty.svg';
// import LikeFull from '@assets/like-full.svg';

interface ThumbnailProps {
  label: string;
}

const ThumbnailBox = ({ label }: ThumbnailProps) => {
  return (
    <ThumbWrap>
      <ThumbLabel>
        <LabelText>{label}</LabelText>
      </ThumbLabel>
      <LikeIcon src={LikeEmpty} />
    </ThumbWrap>
  );
};

export default ThumbnailBox;
