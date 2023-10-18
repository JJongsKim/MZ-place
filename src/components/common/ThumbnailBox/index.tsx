import { LabelText, LikeIcon, ThumbLabel, ThumbWrap } from './style';
import LikeEmpty from '@assets/like-empty.svg';
import LikeFull from '@assets/like-full.svg';
import { useNavigate } from 'react-router-dom';

interface ThumbnailProps {
  label: string;
  like: boolean;
  id: number;
}

const ThumbnailBox = ({ label, like, id }: ThumbnailProps) => {
  const naviagate = useNavigate();
  const handleGoExplainPage = (title: string, id: number) => {
    naviagate(`/content/${id}`, { state: `${title}` });
  };

  return (
    <ThumbWrap onClick={() => handleGoExplainPage(label, id)}>
      <ThumbLabel>
        <LabelText>{label}</LabelText>
      </ThumbLabel>
      {like ? <LikeIcon src={LikeFull} /> : <LikeIcon src={LikeEmpty} />}
    </ThumbWrap>
  );
};

export default ThumbnailBox;
