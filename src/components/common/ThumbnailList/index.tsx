import { ThumbnailListWrap } from './style';
import ThumbnailBox from '../ThumbnailBox';
// import Loading from '../Loading';
// import WarningMention from '../warning';
import { MOCKUP1 } from '@application/mock';

interface ThumbnailListProps {
  places?: PlacesType[];
  isLoading?: boolean;
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
    // <WarningMention text="다시 한 번 새로고침 해주세요!" />
    <ThumbnailListWrap>
      {MOCKUP1.map(data => (
        <ThumbnailBox key={data.id} label={data.title} like={false} id={data.id} />
      ))}
    </ThumbnailListWrap>
  );
};

export default ThumbnailList;
