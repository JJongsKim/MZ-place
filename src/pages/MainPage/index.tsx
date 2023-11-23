import ThumbnailList from '@components/common/ThumbnailList';
import AutoSlide from '@components/MainPage/AutoSlide';

import { MainPageWrap, RecommendText, RecommendTextWrap, RecommendTop20 } from './style';
import { useGetPlacesOfTop20 } from '@hooks/api/places';

const MainPage = () => {
  const top20Places = useGetPlacesOfTop20();
  console.log('TOP20:::', top20Places.data);

  return (
    <MainPageWrap>
      <AutoSlide />
      <RecommendTextWrap>
        <RecommendText>서울산책 회원들이 추천하는</RecommendText>
        <RecommendTop20>TOP20</RecommendTop20>
        {/* {top20Places !== undefined && <ThumbnailList places={top20Places} />} */}
      </RecommendTextWrap>
      <ThumbnailList />
    </MainPageWrap>
  );
};

export default MainPage;
