import withAuth from '@components/HOC/withAuth';

import {
  DivideLine,
  FirstSection,
  InfoText,
  MyPageJobList,
  MyPageWrap,
  UserNameBox,
  WelcomeText,
  WithdrawTextBox,
} from './style';

// TODO 최근 조회 장소, 로컬스토리지 이용하여 구현하기
const MyPage = () => {
  return (
    <MyPageWrap>
      <FirstSection>
        <WelcomeText>반갑습니다!</WelcomeText>
        <UserNameBox>
          <p>수정</p>
          <p>님</p>
        </UserNameBox>
        <InfoText>어떤 작업을 하시겠어요?</InfoText>
      </FirstSection>
      <DivideLine />
      <MyPageJobList>
        <li>로그아웃</li>
        <li>최근 조회한 장소 20곳</li>
        <WithdrawTextBox>회원탈퇴</WithdrawTextBox>
      </MyPageJobList>
    </MyPageWrap>
  );
};

export default withAuth(MyPage);
