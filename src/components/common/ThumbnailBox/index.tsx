import { LabelText, LikeIcon, ThumbLabel, ThumbWrap } from './style';
import { ReactComponent as LikeEmpty } from '@assets/like-gray.svg';
import { ReactComponent as LikeFull } from '@assets/like-full.svg';
import { useNavigate } from 'react-router-dom';

import defaultImage from '../../../images/default.png';

interface ThumbnailProps {
  id: number;
  label: string;
  like: boolean;
  imageSrc?: string;
}

const ThumbnailBox = ({ label, like, id, imageSrc }: ThumbnailProps) => {
  const naviagate = useNavigate();
  const handleGoExplainPage = (title: string, id: number) => {
    naviagate(`/place/${id}`, { state: title });
  };

  return (
    <ThumbWrap
      onClick={() => handleGoExplainPage(label, id)}
      $imageSrc={imageSrc}
      $defaultImageSrc={defaultImage}
    >
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
