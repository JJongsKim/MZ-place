import SearchBar from '@components/common/SearchBar';
import { DetailPageWrap } from '../style';
import { useLocation } from 'react-router-dom';

const LikeRecommendPage = () => {
  const location = useLocation();

  return (
    <DetailPageWrap>
      <SearchBar name={`${location.state.name}`} backIcon={true} searchIcon={true} />
    </DetailPageWrap>
  );
};

export default LikeRecommendPage;
