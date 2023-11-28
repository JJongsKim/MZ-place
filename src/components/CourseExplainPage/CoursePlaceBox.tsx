/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from 'styled-components';

import DEFAULT_IMAGE from '../../images/default.png';
import { useNavigate } from 'react-router-dom';

interface CoursePlaceBoxProps {
  placeId: number;
  placeName: string;
  imageUrl: string;
  courseNumber: number;
}

// 코스 상세 페이지용 - 장소 소개 박스
const CoursePlaceBox = ({ placeId, placeName, imageUrl, courseNumber }: CoursePlaceBoxProps) => {
  const navigate = useNavigate();
  const handleClickCoursePlace = () => {
    navigate(`/place/${placeId}`);
  };

  // 이미지 로딩 실패 시, default 이미지로 대체
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = `${DEFAULT_IMAGE}`;
  };

  return (
    <CoursePlaceBoxWrap onClick={handleClickCoursePlace}>
      <CoursePlaceThumbWrap>
        <CoursePlaceImg src={imageUrl} alt="코스 사진" onError={handleImageError} />
      </CoursePlaceThumbWrap>
      <CourseInfo>
        <CourseNumber>{courseNumber + 1} 코스</CourseNumber>
        <CourseTitle>{placeName}</CourseTitle>
      </CourseInfo>
    </CoursePlaceBoxWrap>
  );
};

const CoursePlaceBoxWrap = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
  padding: 10px;
  border: 1px solid #efefef;
  border-radius: 10px;

  cursor: pointer;
`;

const CoursePlaceThumbWrap = styled.div`
  width: 140px;
  height: 100px;
  border: 1px solid #efefef;
  border-radius: 10px;
`;

const CoursePlaceImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 170px;
  padding: 0 10px;
`;

const CourseNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 28px;
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 10px;
  ${({ theme }) => theme.font.B_14};
`;

const CourseTitle = styled.p`
  margin: 5px;
  line-height: 18px;
  ${({ theme }) => theme.font.B_13};
`;

export default CoursePlaceBox;
