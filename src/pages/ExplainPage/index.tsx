import SearchBar from '@components/common/SearchBar';
import {
  CopyButton,
  CopyButtonWrap,
  ExplainPageWrap,
  InfoIcon,
  InfoIconWrap,
  InfoList,
  InfoText,
  InfoTextWrap,
  LikeIcon,
  LocationTitle,
  MapWrap,
  ThumbnailBox,
  ThumbnailBoxWrap,
} from './style';

import test from '../../images/IMG_9904.jpg';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ReactComponent as LikeEmpty } from '@assets/like-empty.svg';
// import LikeFull from '@assets/like-full.svg';
import { MOCKUP2 } from '@application/mock';
import { useLocation } from 'react-router-dom';
import useToast from '@hooks/useToast';
import Toast from '@components/common/Toast';
import { useState } from 'react';

const ExplainPage = () => {
  const location = useLocation();
  const { toast, handleFloatingToast } = useToast();

  const [findAddress, setFindAddress] = useState(false);
  const handleFindAddress = () => {
    setFindAddress(!findAddress);
  };

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
            </InfoTextWrap>
            {item.type === 'location' && (
              <CopyButtonWrap>
                <CopyToClipboard text={item.content} onCopy={handleFloatingToast}>
                  <CopyButton type="button">복사하기</CopyButton>
                </CopyToClipboard>
                <CopyButton type="button" onClick={handleFindAddress}>
                  {findAddress ? '지도 닫기' : '길 찾기'}
                </CopyButton>
              </CopyButtonWrap>
            )}
            {item.type === 'location' && findAddress && <MapWrap />}
            {item.type === 'phone' && (
              <CopyButtonWrap>
                <CopyToClipboard text={item.content} onCopy={handleFloatingToast}>
                  <CopyButton type="button">복사하기</CopyButton>
                </CopyToClipboard>
              </CopyButtonWrap>
            )}
          </li>
        ))}
      </InfoList>
      {toast && <Toast>클립보드에 복사되었습니다!</Toast>}
    </ExplainPageWrap>
  );
};

export default ExplainPage;
