import SearchBar from '@components/common/SearchBar';
import { DetailPageWrap } from '../style';
import { useLocation } from 'react-router-dom';
import withAuth from '@components/HOC/withAuth';
import WarningMention from '@components/common/warning';

const LikeRecommendPage = () => {
  const location = useLocation();

  return (
    <DetailPageWrap>
      <SearchBar name={`${location.state.name}`} backIcon={true} searchIcon={true} />
      <WarningMention text="사용자 추천 찜 페이지는 아직 개발중이에요 :D" />
    </DetailPageWrap>
  );
};

export default withAuth(LikeRecommendPage);
