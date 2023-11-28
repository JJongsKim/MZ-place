import SearchBar from '@components/common/SearchBar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { DetailPageWrap } from '../style';
import withAuth from '@components/HOC/withAuth';
import WarningMention from '@components/common/warning';
import { useGetPlacesOfHeart } from '@hooks/api/heart';

interface LikeRecommendPageProps {
  userId: Record<string, string>;
}

const LikeRecommendPage = ({ userId }: LikeRecommendPageProps) => {
  const location = useLocation();
  const [likeData, setLikeData] = useState(true);

  const { data } = useGetPlacesOfHeart(userId);

  useEffect(() => {
    if (data.length === 0) {
      setLikeData(false); // 찜이 담겨있지 않을 시 false
    } else {
      setLikeData(true); // TODO 찜이 담겨있을 시, ...
    }
  }, [data]);

  return (
    <DetailPageWrap>
      <SearchBar name={`${location.state.name}`} backIcon={true} searchIcon={true} />
      {likeData ? (
        <div>추천 데이터 들어갈 자리</div>
      ) : (
        <WarningMention text="해당 기능을 사용하시려면 장소를 찜해주세요!" />
      )}
    </DetailPageWrap>
  );
};

export default withAuth(LikeRecommendPage);
