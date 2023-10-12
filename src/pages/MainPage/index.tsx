import ThumbnailList from '@components/common/ThumbnailList';
import AutoSlide from '@components/MainPage/AutoSlide';

import { MainPageWrap } from './style';

const MainPage = () => {
  return (
    <MainPageWrap>
      <AutoSlide />
      <ThumbnailList />
    </MainPageWrap>
  );
};

export default MainPage;
