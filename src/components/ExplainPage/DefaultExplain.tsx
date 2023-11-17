/* eslint-disable @typescript-eslint/no-unused-vars */
import CopyToClipboard from 'react-copy-to-clipboard';
import {
  CopyButton,
  CopyButtonWrap,
  InfoIcon,
  InfoIconWrap,
  InfoList,
  InfoText,
  InfoTextWrap,
} from './style';
import useToast from '@hooks/useToast';
import { useEffect, useState } from 'react';

import Marker from '@assets/marker.svg';
import Pin from '@assets/pin.svg';
import Time from '@assets/time.svg';
import Phone from '@assets/phone.svg';
import InfoCost from '@assets/info-cost.svg';

const DefaultExplain = (props: { placeInfo: PlaceType }) => {
  const { latitude, longitude, description } = props.placeInfo;
  const { handleFloatingToast } = useToast();

  const [findAddress, isFindAddress] = useState(false);
  const [address, setCurrentAddress] = useState('');
  const handleFindAddress = (address: string) => {
    isFindAddress(!findAddress);
    setCurrentAddress(address);
  };

  useEffect(() => {
    if (findAddress) {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        let map;

        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(address, function (res: GeolocationAddress[], status: boolean) {
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
    }
  }, [findAddress]);

  /*
    있을수도, 없을수도 있는 값
    description (코스의 경우 거의 "" 처리)
    phone_number ""
    work_time ""
    page_url ""

    description svg 파일 변경하기..
  */

  return (
    <InfoList>
      {/* 주소 */}
      <li>
        <InfoTextWrap>
          <InfoIconWrap>
            <InfoIcon src={Pin} />
          </InfoIconWrap>
          <InfoText>
            {latitude}, {longitude}
          </InfoText>
        </InfoTextWrap>
        <CopyButtonWrap>
          <CopyToClipboard text={latitude} onCopy={handleFloatingToast}>
            <CopyButton>복사하기</CopyButton>
          </CopyToClipboard>
          <CopyButton type="button" onClick={() => handleFindAddress('서울특별시 종로구')}>
            {findAddress ? '지도 닫기' : '길 찾기'}
          </CopyButton>
        </CopyButtonWrap>
      </li>
      {/* 가격 */}
      <li>
        <InfoTextWrap>
          <InfoIconWrap>
            <InfoIcon />
          </InfoIconWrap>
          <InfoText>{description === '' ? '편하게 산책다녀오세요!' : description}</InfoText>
        </InfoTextWrap>
      </li>
    </InfoList>
  );
};

export default DefaultExplain;
