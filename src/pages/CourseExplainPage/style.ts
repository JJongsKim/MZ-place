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

export {
  CourseExplainPageWrap,
  CourseThumbBox,
  CourseThumbnail,
  CourseLikeIcon,
  CourseTitle,
  CourseInfoList,
  CourseTime,
};
