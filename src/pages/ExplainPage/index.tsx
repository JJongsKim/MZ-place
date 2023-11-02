import SearchBar from '@components/common/SearchBar';
import {
  ChipsWrap,
  ExplainPageWrap,
  InfoIcon,
  InfoIconWrap,
  InfoList,
  InfoText,
  InfoTextWrap,
  LikeIcon,
  LocationTitle,
  ThumbnailBox,
  ThumbnailBoxWrap,
} from './style';

import test from '../../images/IMG_9904.jpg';

import { ReactComponent as LikeEmpty } from '@assets/like-empty.svg';
// import LikeFull from '@assets/like-full.svg';
import { MOCKUP2 } from '@application/mock';
import { useLocation } from 'react-router-dom';
import Chip from '@components/common/Chip';

const ExplainPage = () => {
  const location = useLocation();

  return (
    <ExplainPageWrap>
      <SearchBar name={location.state} backIcon={true} />
      <ThumbnailBoxWrap>
        <ThumbnailBox src={test} alt="장소썸네일" />
        <LikeIcon>
          <LikeEmpty />
        </LikeIcon>
      </ThumbnailBoxWrap>
      <LocationTitle>{location.state}</LocationTitle>
      <InfoList>
        {MOCKUP2.map(item => (
          <li key={item.type}>
            <InfoTextWrap>
              <InfoIconWrap>
                <InfoIcon src={item.svg} />
              </InfoIconWrap>
              <InfoText>{item.content}</InfoText>
              {item.type === 'location' && (
                <ChipsWrap>
                  <span>
                    <Chip value="복사하기" size="small" />
                  </span>
                  <span>
                    <Chip value="길찾기" size="small" />
                  </span>
                </ChipsWrap>
              )}
              {item.type === 'phone' && (
                <ChipsWrap>
                  <Chip value="복사하기" size="small" />
                </ChipsWrap>
              )}
            </InfoTextWrap>
          </li>
        ))}
      </InfoList>
    </ExplainPageWrap>
  );
};

export default ExplainPage;
