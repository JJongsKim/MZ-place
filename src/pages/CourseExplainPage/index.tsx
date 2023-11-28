/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import SearchBar from '@components/common/SearchBar';

import {
  CourseExplainPageWrap,
  CourseInfoList,
  CourseLikeIcon,
  CourseMapButton,
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

const CourseExplainPage = ({ userId }: CourseExplainPageProps) => {
  const location = useLocation();

  const [heartState, setHeartState] = useState(false);
  const [findAddress, isFindAddress] = useState(true);
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
      // - 코스 상세 | 찜이 눌리지 않은 코스 > 찜 누르기
      if (location.pathname === '/search/course') {
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
        // - 코스 상세 | 이미 찜이 눌린 코스 > 찜 해제
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
    }
  };

  useEffect(() => {
    if (courseInfo?.heart === 1) {
      setHeartState(true);
    } else {
      setHeartState(false);
    }
  }, []);

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
            <li>
              <CourseMapButton>코스 지도 닫기</CourseMapButton>
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
