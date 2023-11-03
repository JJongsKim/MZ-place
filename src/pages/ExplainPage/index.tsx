/* eslint-disable @typescript-eslint/no-explicit-any */
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
import Marker from '@assets/marker.svg';
import test from '../../images/IMG_9904.jpg';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ReactComponent as LikeEmpty } from '@assets/like-empty.svg';
import { MOCKUP2 } from '@application/mock';
import useToast from '@hooks/useToast';
import SearchBar from '@components/common/SearchBar';
import Toast from '@components/common/Toast';

declare global {
  interface Window {
    kakao: any;
  }
}

const ExplainPage = () => {
  const location = useLocation();
  const { toast, handleFloatingToast } = useToast();

  const mapScript = document.createElement('script');
  mapScript.async = true;
  mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API_KEY}&autoload=false&libraries=services,clusterer,drawing`;
  document.head.appendChild(mapScript);

  const [findAddress, isFindAddress] = useState(false);
  const [address, setCurrentAddress] = useState('');
  const handleFindAddress = (address: string) => {
    isFindAddress(!findAddress);
    setCurrentAddress(address);
  };

  useEffect(() => {
    if (findAddress) {
      const onLoadKakaoMap = () => {
        window.kakao.maps.load(() => {
          const mapContainer = document.getElementById('map');
          let map;

          const geocoder = new window.kakao.maps.services.Geocoder();
          geocoder.addressSearch(address, function (res: any, status: boolean) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(res[0].y, res[0].x);
              const mapOption = {
                center: coords,
                level: 4,
              };
              map = new window.kakao.maps.Map(mapContainer, mapOption);

              const markerImageInfo = {
                imageSrc: Marker,
                imageSize: new window.kakao.maps.Size(28, 40),
              };
              const markerImage = new window.kakao.maps.MarkerImage(
                markerImageInfo.imageSrc,
                markerImageInfo.imageSize,
                null,
              );
              const marker = new window.kakao.maps.Marker({
                position: coords,
                image: markerImage,
              });
              marker.setMap(map);
            }
          });

          return map;
        });
      };
      mapScript.addEventListener('load', onLoadKakaoMap);

      return () => mapScript.removeEventListener('load', onLoadKakaoMap);
    }
  }, [findAddress]);

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
                <CopyButton type="button" onClick={() => handleFindAddress(item.content)}>
                  {findAddress ? '지도 닫기' : '길 찾기'}
                </CopyButton>
              </CopyButtonWrap>
            )}
            {item.type === 'location' && findAddress && <MapWrap id="map" />}
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
