import withAuth from '@components/HOC/withAuth';

import {
  DivideLine,
  FirstSection,
  InfoText,
  MyPageJobList,
  MyPageWrap,
  UserNameBox,
  WelcomeText,
} from './style';

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
        <li>최근 조회 장소 보러가기</li>
        <li>회원탈퇴</li>
      </MyPageJobList>
    </MyPageWrap>
  );
};

export default withAuth(MyPage);
