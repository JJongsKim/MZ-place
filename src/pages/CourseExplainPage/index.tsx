/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import SearchBar from '@components/common/SearchBar';

import {
  CourseExplainPageWrap,
  CourseInfoList,
  CourseLikeIcon,
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

interface CourseExplainPageProps {
  userId: Record<string, string>;
}

const CourseExplainPage = ({ userId }: CourseExplainPageProps) => {
  const location = useLocation();

  const [heartState, setHeartState] = useState(false);
  const { toast, handleFloatingToast } = useToast();

  const { isLoading, data } = useGetInfoByCourseId(
    Number(location.pathname.match(/\/course\/(\d+)/)?.[1]),
    userId,
  );
  const courseInfo = data?.data.result as CourseType; // 코스 큰 정보
  const coursePlaceInfo = courseInfo.places; // 코스 속 상세 장소 정보들

  useEffect(() => {
    if (location.state.heart === 1) {
      setHeartState(true);
    } else {
      setHeartState(false);
    }
  }, []);

  return (
    <CourseExplainPageWrap>
      <SearchBar name={location.state.name} backIcon={true} searchIcon={false} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CourseThumbBox>
            <CourseThumbnail src={courseInfo.image_url} alt="장소썸네일" />
            <CourseLikeIcon>{heartState ? <LikeFull /> : <LikeEmpty />}</CourseLikeIcon>
          </CourseThumbBox>
          <CourseTitle>{location.state.name}</CourseTitle>
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
            {courseInfo ? '' : <WarningMention text="다시 새로고침 해주세요!" />}
          </CourseInfoList>
        </>
      )}
      {toast && <Toast>찜 기능은 로그인 후 이용해주세요!</Toast>}
    </CourseExplainPageWrap>
  );
};

export default CourseExplainPage;
