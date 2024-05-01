import {
  DropdownBtn,
  DropdownBtnWrap,
  DropdownList,
  DropdownListWrap,
  DropdownTextWrap,
  DropdownWrap,
} from '@components/common/DropDown/style';
import { LikeIcon, ThumbnailBox, ThumbnailBoxWrap } from '@pages/ExplainPage/style';
import { styled } from 'styled-components';

const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 25px;
  margin-bottom: 80px;

  li {
    margin-bottom: 40px;
    line-height: 25px;
  }
`;

const InfoTextWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InfoIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 0 26px 0 15px;
`;

const InfoIcon = styled.img`
  width: 20px;
  height: 24px;
`;

const InfoText = styled.p`
  ${({ theme }) => theme.font.M_13}

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.M_14}
  }
`;

const CopyButtonWrap = styled.div`
  display: flex;
  padding: 10px 0 0 35px;
`;

const CopyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 30px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: #eee;
  ${({ theme }) => theme.font.M_12};
  cursor: pointer;
`;

const MapWrap = styled.div`
  width: 280px;
  height: 180px;
  margin: 10px 24px 0;
  border: 1px solid ${({ theme }) => theme.colors.text_gray};

  @media screen and (min-width: 1200px) {
    width: 320px;
    height: 220px;
    margin: 15px 4px 0;
  }
`;

const CourseIntroText = styled.p`
  ${({ theme }) => theme.font.B_16};

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.B_18};
  }
`;

const CourseIntroLine = styled.hr`
  width: 330px;
  border: 0.8px solid ${({ theme }) => theme.colors.text_gray};
`;

const CourseIntroWrap = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CourseIntroThumbnail = styled(ThumbnailBoxWrap)`
  height: 150px;
`;

const CourseIntroImage = styled(ThumbnailBox)``;

const CourseLikeIcon = styled(LikeIcon)``;

const CourseTitle = styled.p`
  padding: 8px 0 10px;
  ${({ theme }) => theme.font.B_14};

  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.font.B_16};
  }
`;

const CourseList = styled.ul`
  li {
    ${({ theme }) => theme.font.M_13};

    span {
      width: 80px;
      margin-right: 20px;
      border-radius: 10px;
      border: 0.8px solid ${({ theme }) => theme.colors.green};
      text-align: center;
      ${({ theme }) => theme.font.B_13};
    }

    margin-bottom: 5px;
  }
`;

const ReviewWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 25px;
  margin-bottom: 100px;
`;

const ReviewHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  button {
    background-color: transparent;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.green};
  }
`;

const ReviewSummary = styled.div`
  display: flex;
  align-items: center;

  p {
    padding: 0 6px;
    font-size: 0.8rem;
  }
`;

const ReviewUserInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;

  p {
    margin-right: 6px;
  }
`;

const ReviewContent = styled.p`
  font-size: 0.8rem;
  padding: 5px 0;
`;

const ReviewPostWrap = styled.form`
  width: 100%;
  margin-bottom: 10px;
`;

const ReviewPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const ReviewPostContent = styled.textarea`
  width: 100%;
  height: 120px;
  margin-bottom: 5px;
  padding: 10px;
  font-size: 0.8rem;

  resize: none;
  border: none;
  outline: none;
  background-color: #f4f4f4;
`;

const ReviewPostDropdown = styled(DropdownWrap)`
  width: 100px;
  height: 20px;
`;
const ReviewPostDropdownText = styled(DropdownTextWrap)`
  width: 90%;
`;
const ReviewPostDropdownBtnWrap = styled(DropdownBtnWrap)``;
const ReviewPostDropdownBtn = styled(DropdownBtn)`
  width: 14px;
`;
const ReviewPostDropdownListWrap = styled(DropdownListWrap)`
  top: 18px;

  width: 100px;
  height: 130px;
`;
const ReviewPostDropdownList = styled(DropdownList)`
  li {
    margin: 8px 0;
  }
`;

const ReviewPostButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.green};
  }
`;

const SelectBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const SelectButton = styled.button<{
  $state: boolean;
}>`
  width: 50%;
  height: 20px;
  background-color: transparent;
  border-bottom: ${props => props.$state && '2px solid #bababa'};
  color: ${({ theme }) => theme.colors.gray};
`;

export {
  InfoList,
  InfoTextWrap,
  InfoIconWrap,
  InfoText,
  InfoIcon,
  CopyButtonWrap,
  CopyButton,
  MapWrap,
  CourseIntroText,
  CourseIntroLine,
  CourseIntroWrap,
  CourseIntroThumbnail,
  CourseIntroImage,
  CourseLikeIcon,
  CourseTitle,
  CourseList,
  SelectBox,
  SelectButton,
  ReviewWrap,
  ReviewHeader,
  ReviewSummary,
  ReviewUserInfo,
  ReviewContent,
  ReviewPostWrap,
  ReviewPostHeader,
  ReviewPostContent,
  ReviewPostDropdown,
  ReviewPostDropdownText,
  ReviewPostDropdownBtnWrap,
  ReviewPostDropdownBtn,
  ReviewPostDropdownListWrap,
  ReviewPostDropdownList,
  ReviewPostButtonWrap,
};
