import { InfoList } from '@components/ExplainPage/style';
import {
  ExplainPageWrap,
  LikeIcon,
  LocationTitle,
  ThumbnailBox,
  ThumbnailBoxWrap,
} from '@pages/ExplainPage/style';

import { styled } from 'styled-components';

const CourseExplainPageWrap = styled(ExplainPageWrap)``;
const CourseThumbBox = styled(ThumbnailBoxWrap)``;
const CourseThumbnail = styled(ThumbnailBox)``;
const CourseLikeIcon = styled(LikeIcon)``;
const CourseTitle = styled(LocationTitle)``;
const CourseInfoList = styled(InfoList)``;

const CourseTime = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  li {
    margin: 0;
    ${({ theme }) => theme.font.M_13};

    span {
      width: 80px;
      margin-right: 8px;
      border-radius: 10px;
      border: 0.8px solid ${({ theme }) => theme.colors.green};
      text-align: center;
      ${({ theme }) => theme.font.B_13};
    }
  }
`;

const CourseMapButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: #eee;
  ${({ theme }) => theme.font.M_12};
`;

export {
  CourseExplainPageWrap,
  CourseThumbBox,
  CourseThumbnail,
  CourseLikeIcon,
  CourseTitle,
  CourseInfoList,
  CourseTime,
  CourseMapButton,
};
