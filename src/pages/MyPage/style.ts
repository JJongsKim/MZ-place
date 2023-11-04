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

  @media screen and (min-width: 1200px) {
    width: 800px;
  }
`;

const WelcomeText = styled.p`
  margin-bottom: 20px;
  ${({ theme }) => theme.font.B_24};

  @media screen and (min-width: 1200px) {
    margin-bottom: 25px;
    ${({ theme }) => theme.font.B_28};
  }
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

  // 데스크탑 스타일
  @media screen and (min-width: 1200px) {
    margin-bottom: 80px;

    p:nth-child(1) {
      ${({ theme }) => theme.font.B_26};
    }
    p:nth-child(2) {
      ${({ theme }) => theme.font.B_18};
    }
  }
`;

const InfoText = styled.p`
  margin-bottom: 10px;
  ${({ theme }) => theme.font.B_18};

  @media screen and (min-width: 1200px) {
    margin-bottom: 20px;
    ${({ theme }) => theme.font.B_22};
  }
`;

const DivideLine = styled(SearchBarLine)``;

const MyPageJobList = styled.ul`
  position: relative;

  width: 375px;
  padding-left: 26px;

  li {
    margin: 70px 0;
    ${({ theme }) => theme.font.B_18};
    cursor: pointer;
  }
  li:nth-child(2) {
    margin-bottom: 15px;
  }

  // 데스크탑 스타일
  @media screen and (min-width: 1200px) {
    width: 800px;

    li {
      margin: 80px 0;
      ${({ theme }) => theme.font.B_20};
    }
  }
`;

const WithdrawTextBox = styled.div`
  position: absolute;
  top: 62px;
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

  @media screen and (min-width: 1200px) {
    top: 75px;
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
};
