import { MOCKUP1 } from '@application/mock';
import { ThumbnailListWrap } from './style';
import ThumbnailBox from '../ThumbnailBox';

interface ThumbnailListProps {
  places?: PlacesType[];
}

// TODO API 모두 입히면 수정하기
const ThumbnailList = ({ places }: ThumbnailListProps) => {
  return places ? (
    <ThumbnailListWrap>
      {places.map(data => (
        <ThumbnailBox
          key={data.id}
          label={data.name}
          like={false}
          id={data.id}
          imageSrc={data.image_url}
        />
      ))}
    </ThumbnailListWrap>
  ) : (
    <ThumbnailListWrap>
      {MOCKUP1.map(data => (
        <ThumbnailBox key={data.title} label={data.title} like={data.like} id={data.id} />
      ))}
    </ThumbnailListWrap>
  );
};

export default ThumbnailList;
