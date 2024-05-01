import { styled } from 'styled-components';
import {
  DropdownBtn,
  DropdownBtnWrap,
  DropdownList,
  DropdownListWrap,
  DropdownTextWrap,
  DropdownWrap,
} from '../DropDown/style';

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
    font-weight: 500;
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

const ReviewList = styled.li`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
`;

const ReviewListEditWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  button {
    margin-left: 10px;
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

export {
  ReviewWrap,
  ReviewHeader,
  ReviewSummary,
  ReviewUserInfo,
  ReviewList,
  ReviewContent,
  ReviewListEditWrap,
  ReviewPostHeader,
  ReviewPostWrap,
  ReviewPostDropdownText,
  ReviewPostContent,
  ReviewPostDropdown,
  ReviewPostDropdownBtnWrap,
  ReviewPostDropdownBtn,
  ReviewPostDropdownListWrap,
  ReviewPostDropdownList,
  ReviewPostButtonWrap,
};
