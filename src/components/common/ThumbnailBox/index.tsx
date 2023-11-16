import { LabelText, LikeIcon, ThumbLabel, ThumbWrap } from './style';
import { ReactComponent as LikeEmpty } from '@assets/like-empty.svg';
import { ReactComponent as LikeFull } from '@assets/like-full.svg';
import { useNavigate } from 'react-router-dom';

interface ThumbnailProps {
  id: number;
  label: string;
  like: boolean;
  imageSrc?: string;
}

const ThumbnailBox = ({ label, like, id, imageSrc }: ThumbnailProps) => {
  const naviagate = useNavigate();
  const handleGoExplainPage = (title: string, id: number) => {
    naviagate(`/content/${id}`, { state: `${title}` });
  };

  return (
    <ThumbWrap onClick={() => handleGoExplainPage(label, id)} $imageSrc={imageSrc}>
      <ThumbLabel>
        <LabelText>{label}</LabelText>
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
