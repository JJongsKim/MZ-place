import withAuth from '@components/HOC/withAuth';

import {
  ContentArea,
  HeaderItemWrap,
  HeaderLine,
  HeaderNameText,
  HeaderText,
  LikePageHeader,
  LikePageWrap,
} from './style';
import WarningMention from '@components/common/warning';

const LikePage = () => {
  return (
    <LikePageWrap>
      <LikePageHeader>
        <HeaderItemWrap>
          <HeaderNameText>수정</HeaderNameText>
          <HeaderText>님이 좋아하는 곳</HeaderText>
        </HeaderItemWrap>
        <HeaderLine />
      </LikePageHeader>
      <ContentArea>
        <WarningMention text="아직 찜을 누른 곳이 없어요!" />
      </ContentArea>
    </LikePageWrap>
  );
};

export default withAuth(LikePage);
