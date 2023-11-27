import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import useToast from '@hooks/useToast';

import {
  CopyButton,
  CopyButtonWrap,
  CourseIntroImage,
  CourseIntroLine,
  CourseIntroText,
  CourseIntroThumbnail,
  CourseIntroWrap,
  CourseLikeIcon,
  CourseList,
  CourseTitle,
  InfoIcon,
  InfoIconWrap,
  InfoList,
  InfoText,
  InfoTextWrap,
  MapWrap,
} from './style';
import { ReactComponent as LikeEmpty } from '@assets/like-gray.svg';
import { ReactComponent as LikeFull } from '@assets/like-full.svg';

import Marker from '@assets/marker.svg';
import Pin from '@assets/pin.svg';
import Time from '@assets/time.svg';
import Phone from '@assets/phone.svg';
import InfoEtc from '@assets/info-etc.svg';
import LinkIcon from '@assets/link.svg';
import Toast from '@components/common/Toast';
import { Link } from 'react-router-dom';

interface DefaultExplainProps {
  placeInfo: PlaceType;
  address: string;
  isRelatedCourse?: boolean;
}

const DefaultExplain = ({ placeInfo, address, isRelatedCourse }: DefaultExplainProps) => {
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
      {placeInfo.phone_number && (
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
      )}
      {/* - 운영시간 - */}
      {placeInfo.work_time && (
        <li>
          <InfoTextWrap>
            <InfoIconWrap>
              <InfoIcon src={Time} />
            </InfoIconWrap>
            <InfoText>{placeInfo.work_time}</InfoText>
          </InfoTextWrap>
        </li>
      )}
      {/* - 가격 | 이외 정보 - */}
      <li>
        <InfoTextWrap>
          <InfoIconWrap>
            <InfoIcon src={InfoEtc} />
          </InfoIconWrap>
          <InfoText>{description === '' ? '편하게 산책다녀오세요 :D' : description}</InfoText>
        </InfoTextWrap>
      </li>
      {/* - 홈페이지 링크 - */}
      {placeInfo.page_url && (
        <li>
          <InfoTextWrap>
            <InfoIconWrap>
              <InfoIcon src={LinkIcon} />
            </InfoIconWrap>
            <InfoText>
              <Link to={placeInfo.page_url}>
                <u>홈페이지 주소</u>
              </Link>
            </InfoText>
          </InfoTextWrap>
        </li>
      )}
      {/* 코스와 관련된 장소인 경우, 코스 추천
      TODO: 코스 API 모두 연결 시, 링크연결되도록 수정해보기? */}
      {isRelatedCourse &&
        placeInfo.related_course &&
        placeInfo.related_course.map(course => (
          <section style={{ marginBottom: '10px' }}>
            <CourseIntroText>코스</CourseIntroText>
            <CourseIntroLine />
            <CourseIntroWrap>
              <CourseIntroThumbnail>
                <CourseIntroImage src={course.image_url} alt="장소코스" />
                <CourseLikeIcon>{course.heart ? <LikeFull /> : <LikeEmpty />}</CourseLikeIcon>
              </CourseIntroThumbnail>
              <CourseTitle>{course.name}</CourseTitle>
              <CourseList>
                <li>
                  <span>소요 시간</span>
                  {course.duration_time}
                </li>
                <li>
                  <span>기타 정보</span>
                  {course.price}
                </li>
              </CourseList>
            </CourseIntroWrap>
          </section>
        ))}
      {toast && <Toast>클립보드에 복사되었습니다!</Toast>}
    </InfoList>
  );
};

export default DefaultExplain;
