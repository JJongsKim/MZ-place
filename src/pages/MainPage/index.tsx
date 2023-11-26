import ThumbnailList from '@components/common/ThumbnailList';
import AutoSlide from '@components/MainPage/AutoSlide';

import {
  ContentWrap,
  MainPageWrap,
  RecommendText,
  RecommendTextWrap,
  RecommendTop20,
} from './style';
import { useGetPlacesOfTop20 } from '@hooks/api/places';
import { useNavigate } from 'react-router-dom';

interface MainPageProps {
  userId: Record<string, string>;
}

const MainPage = ({ userId }: MainPageProps) => {
  const navigate = useNavigate();
  const { data } = useGetPlacesOfTop20(userId);
  const top20Places = data as PlacesType[];

  return (
    <MainPageWrap>
      <AutoSlide
        onClick={() =>
          navigate('/search/custom', {
            state: {
              name: '맞춤 필터',
            },
          })
        }
      />
      <RecommendTextWrap>
        <RecommendText>서울산책 회원들이 추천하는</RecommendText>
        <RecommendTop20>TOP20</RecommendTop20>
      </RecommendTextWrap>
      <ContentWrap>{top20Places && <ThumbnailList places={top20Places} />}</ContentWrap>
    </MainPageWrap>
  );
};

export default MainPage;
