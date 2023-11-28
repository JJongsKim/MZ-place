/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import SearchBar from '@components/common/SearchBar';
import Marker from '@assets/marker.svg';

import {
  CourseExplainPageWrap,
  CourseInfoList,
  CourseLikeIcon,
  CourseMapButton,
  CourseRouteMap,
  CourseThumbBox,
  CourseThumbnail,
  CourseTime,
  CourseTitle,
} from './style';
import { CourseIntroLine, CourseIntroText } from '@components/ExplainPage/style';
import { ReactComponent as LikeEmpty } from '@assets/like-gray.svg';
import { ReactComponent as LikeFull } from '@assets/like-full.svg';
import useToast from '@hooks/useToast';
import { useGetInfoByCourseId } from '@hooks/api/places';
import Loading from '@components/common/Loading';
import Toast from '@components/common/Toast';
import WarningMention from '@components/common/warning';
import CoursePlaceBox from '@components/CourseExplainPage/CoursePlaceBox';
import { useDeleteHeart, usePushHeart } from '@hooks/api/heart';

interface CourseExplainPageProps {
  userId: Record<string, string>;
}

/* 
  코스 Id별 상세 페이지
  - 코스 속 장소 리스트 N코스 표시
  - 지도에 N코스 별 마커 생성
  - 마커 사이 선으로 표시
*/
const CourseExplainPage = ({ userId }: CourseExplainPageProps) => {
  const location = useLocation();

  const [heartState, setHeartState] = useState(false);
  const [findAddress, isFindAddress] = useState(false);
  const { toast, handleFloatingToast } = useToast();

  const { isLoading, data } = useGetInfoByCourseId(
    Number(location.pathname.match(/\/course\/(\d+)/)?.[1]),
    userId,
  );
  const courseInfo = data?.data.result as CourseType; // 코스 큰 정보
  const coursePlaceInfo = courseInfo?.places; // 코스 속 상세 장소 정보들
  if (coursePlaceInfo) {
    coursePlaceInfo.sort((a, b) => a.order_number - b.order_number);
  }

  const { mutate: pushHeartMutation } = usePushHeart();
  const { mutate: deleteHeartMutation } = useDeleteHeart();
  const handleClickHeart = (courseId: number) => {
    if (userId && Object.keys(userId).length === 0) {
      handleFloatingToast();
    } else {
      // - 코스 | 찜이 눌리지 않은 장소 > 찜 누르기
      if (!heartState) {
        pushHeartMutation({
          args: {
            type: 'c',
            course_id: courseId,
          },
          headerArgs: userId!,
        });
        setHeartState(true);
      }
      // - 코스 | 이미 찜이 눌린 장소 > 찜 해제
      if (heartState) {
        deleteHeartMutation({
          args: {
            type: 'c',
            course_id: courseId,
          },
          headerArgs: userId!,
        });
        setHeartState(false);
      }
    }
  };

  useEffect(() => {
    if (courseInfo?.heart === 1) {
      setHeartState(true);
    } else {
      setHeartState(false);
    }
  }, []);

  useEffect(() => {
    if (findAddress && courseInfo && coursePlaceInfo) {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');

        // 마커 이미지 정보
        const locationImageInfo = {
          imageSrc: Marker,
          imageSize: new window.kakao.maps.Size(24, 24),
        };
        // 마커 이미지 정보 넣기
        const locationImage = new window.kakao.maps.MarkerImage(
          locationImageInfo.imageSrc,
          locationImageInfo.imageSize,
          null,
        );
        // 마커 생성과 마커를 잇는 함수
        const drawMarkerAndLine = (mapInstance: any) => {
          const markers: any = [];
          const linePath: any = [];

          coursePlaceInfo.forEach(course => {
            const markerPosition = new window.kakao.maps.LatLng(
              course.place_latitude,
              course.place_longitude,
            );
            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
              image: locationImage,
            });

            // order_number를 표시할 customOverlay 생성
            const orderNumberOverlay = new window.kakao.maps.CustomOverlay({
              position: markerPosition,
              content: `<div style="width: 50px; height: 25px; background-color: #fff; border: 1px solid #19bb35;
                border-radius: 10px; font-size: 12px; font-weight: bold; text-align: center; 
                position: absolute; bottom: 20px; left: -24px; z-index: 5;" >
                  ${course.order_number + 1} 코스
                </div>`,
            });

            // 마커에 CustomOverlay 추가

            markers.push(marker);
            linePath.push(markerPosition);
            orderNumberOverlay.setMap(mapInstance);
          });

          markers.map((item: any) => item.setMap(mapInstance));
          // kakao map API에서 제공하는 Polyline 함수
          const polyline = new window.kakao.maps.Polyline({
            path: linePath,
            strokeWeight: 3,
            strokeColor: '#001aff',
            strokeOpcaity: 1,
            strokeStyle: 'solid',
          });

          polyline.setMap(mapInstance);
        };

        // 코스 루트를 표시할 지도의 중앙값 계산!
        const calculateMapCenter = (places: CoursePlaceType[]) => {
          const latitudes = places.map(place => parseFloat(place.place_latitude));
          const longitudes = places.map(place => parseFloat(place.place_longitude));

          const averageLatitude =
            latitudes.reduce((sum, value) => sum + value, 0) / latitudes.length;
          const averageLongitude =
            longitudes.reduce((sum, value) => sum + value, 0) / longitudes.length;

          return new window.kakao.maps.LatLng(averageLatitude, averageLongitude);
        };

        const center = calculateMapCenter(coursePlaceInfo);
        const options = {
          center: center,
          level: 5,
        };

        const map = new window.kakao.maps.Map(mapContainer, options);
        drawMarkerAndLine(map); // 지도 생성 후 마커-선 표시 함수 실행

        return map;
      });
    }
  }, [findAddress]);

  return (
    <CourseExplainPageWrap>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SearchBar name={courseInfo?.name} backIcon={true} searchIcon={false} />
          <CourseThumbBox>
            <CourseThumbnail src={courseInfo.image_url} alt="장소썸네일" />
            <CourseLikeIcon onClick={() => handleClickHeart(courseInfo?.id)}>
              {heartState ? <LikeFull /> : <LikeEmpty />}
            </CourseLikeIcon>
          </CourseThumbBox>
          <CourseTitle>{courseInfo?.name}</CourseTitle>
          <CourseInfoList>
            <CourseTime>
              <li>
                <span>소요시간</span>
                {courseInfo.duration_time}
              </li>
              <li>
                <span>기타 정보</span>
                {courseInfo.price} 공간 있음
              </li>
            </CourseTime>
            <CourseIntroText>코스</CourseIntroText>
            <CourseIntroLine />
            <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CourseMapButton type="button" onClick={() => isFindAddress(!findAddress)}>
                {findAddress ? '코스 지도 닫기' : '코스 지도 열기'}
              </CourseMapButton>
              {findAddress ? <CourseRouteMap id="map" /> : null}
            </li>
            {coursePlaceInfo ? (
              coursePlaceInfo.map(course => (
                <CoursePlaceBox
                  key={course.order_number}
                  placeId={course.place_id}
                  placeName={course.place_name}
                  imageUrl={course.place_image_url}
                  courseNumber={course.order_number}
                />
              ))
            ) : (
              <WarningMention text="다시 새로고침 해주세요!" />
            )}
          </CourseInfoList>
        </>
      )}
      {toast && <Toast>찜 기능은 로그인 후 이용해주세요!</Toast>}
    </CourseExplainPageWrap>
  );
};

export default CourseExplainPage;
