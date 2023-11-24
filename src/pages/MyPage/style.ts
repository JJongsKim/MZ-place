import { SearchBarLine } from '@components/common/SearchBar/style';
import { styled } from 'styled-components';

const MyPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FirstSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 375px;
  margin-top: 50px;
  padding: 0 26px;
`;

const WelcomeText = styled.p`
  margin-bottom: 20px;
  ${({ theme }) => theme.font.B_22};
`;

const UserNameBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 60px;

  p:nth-child(1) {
    color: ${({ theme }) => theme.colors.green};
    ${({ theme }) => theme.font.B_22};
  }
  p:nth-child(2) {
    padding: 0 6px;
    ${({ theme }) => theme.font.B_16};
  }
`;

const InfoText = styled.p`
  margin-bottom: 10px;
  ${({ theme }) => theme.font.M_18};
`;

const DivideLine = styled(SearchBarLine)``;

const MyPageJobList = styled.ul`
  position: relative;

  width: 375px;
  padding-left: 26px;

  li {
    margin: 70px 0;
    ${({ theme }) => theme.font.M_16};
  }
  li:nth-child(1) {
    cursor: pointer;
  }
  li:nth-child(2) {
    margin-bottom: 15px;
    user-select: none;
  }
`;

const WithdrawTextBox = styled.div`
  position: absolute;
  top: 60px;
  right: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 35px;
  border-radius: 10px;
  background-color: #e8e8e8;
  ${({ theme }) => theme.font.B_13};

  cursor: pointer;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WithdrawText = styled.p`
  padding: 35px 0 40px;
  ${({ theme }) => theme.font.B_20};
`;

const SelectBoxWrap = styled.div`
  display: flex;
`;

const SelectBox = styled.button`
  width: 80px;
  height: 35px;
  margin: 0 10px;
  border-radius: 8px;
  ${({ theme }) => theme.font.B_14};

  &:nth-child(2) {
    color: white;
    background-color: #ee7676;
  }
`;

export {
  MyPageWrap,
  FirstSection,
  WelcomeText,
  UserNameBox,
  InfoText,
  DivideLine,
  MyPageJobList,
  WithdrawTextBox,
  ModalBox,
  WithdrawText,
  SelectBoxWrap,
  SelectBox,
};
