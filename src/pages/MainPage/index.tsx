import ThumbnailList from '@components/common/ThumbnailList';
import AutoSlide from '@components/MainPage/AutoSlide';

import { MainPageWrap, RecommendText, RecommendTextWrap, RecommendTop20 } from './style';

const MainPage = () => {
  return (
    <MainPageWrap>
      <AutoSlide />
      <RecommendTextWrap>
        <RecommendText>서울산책 회원들이 추천하는</RecommendText>
        <RecommendTop20>TOP20 cicd테스트</RecommendTop20>
      </RecommendTextWrap>
      <ThumbnailList />
    </MainPageWrap>
  );
};

export default MainPage;
