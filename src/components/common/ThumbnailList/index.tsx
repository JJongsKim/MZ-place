import { MOCKUP1 } from '@application/mock';
import { ThumbnailListWrap } from './style';
import ThumbnailBox from '../ThumbnailBox';

const ThumbnailList = () => {
  return (
    <ThumbnailListWrap>
      {MOCKUP1.map(data => (
        <ThumbnailBox key={data.title} label={data.title} like={data.like} id={data.id} />
      ))}
    </ThumbnailListWrap>
  );
};

export default ThumbnailList;
