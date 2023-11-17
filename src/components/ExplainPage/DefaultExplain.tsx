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
  MapWrap,
} from './style';
import useToast from '@hooks/useToast';
import { useEffect, useState } from 'react';

import Marker from '@assets/marker.svg';
import Pin from '@assets/pin.svg';
import Time from '@assets/time.svg';
import Phone from '@assets/phone.svg';
import InfoEtc from '@assets/info-etc.svg';
import Toast from '@components/common/Toast';
import useReverseGeoCoding from '@hooks/useReverseGeoCoding';

interface DefaultExplainProps {
  placeInfo: PlaceType;
  address: string;
}

const DefaultExplain = ({ placeInfo, address }: DefaultExplainProps) => {
  const { description } = placeInfo;
  const { toast, handleFloatingToast } = useToast();

  const [findAddress, isFindAddress] = useState(false);

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
      {/* - 주소 - */}
      <li>
        <InfoTextWrap>
          <InfoIconWrap>
            <InfoIcon src={Pin} />
          </InfoIconWrap>
          <InfoText>{address}</InfoText>
        </InfoTextWrap>
        <CopyButtonWrap>
          <CopyToClipboard text={address} onCopy={handleFloatingToast}>
            <CopyButton>복사하기</CopyButton>
          </CopyToClipboard>
          <CopyButton type="button" onClick={() => isFindAddress(!findAddress)}>
            {findAddress ? '지도 닫기' : '길 찾기'}
          </CopyButton>
        </CopyButtonWrap>
        {findAddress && <MapWrap id="map" />}
      </li>
      {/* - 전화번호 - */}
      {placeInfo.phone_number ? (
        <li>
          <InfoTextWrap>
            <InfoIconWrap>
              <InfoIcon src={Phone} />
            </InfoIconWrap>
            <InfoText>{placeInfo.phone_number}</InfoText>
          </InfoTextWrap>
          <CopyButtonWrap>
            <CopyToClipboard text={placeInfo.phone_number} onCopy={handleFloatingToast}>
              <CopyButton>복사하기</CopyButton>
            </CopyToClipboard>
          </CopyButtonWrap>
        </li>
      ) : null}
      {/* - 운영시간 - */}
      {placeInfo.work_time ? (
        <li>
          <InfoTextWrap>
            <InfoIconWrap>
              <InfoIcon src={Time} />
            </InfoIconWrap>
            <InfoText>{placeInfo.work_time}</InfoText>
          </InfoTextWrap>
        </li>
      ) : null}
      {/* - 가격 | 이외 정보 - */}
      <li>
        <InfoTextWrap>
          <InfoIconWrap>
            <InfoIcon src={InfoEtc} />
          </InfoIconWrap>
          <InfoText>{description === '' ? '편하게 산책다녀오세요 :D' : description}</InfoText>
        </InfoTextWrap>
      </li>
      {toast && <Toast>클립보드에 복사되었습니다!</Toast>}
    </InfoList>
  );
};

export default DefaultExplain;
