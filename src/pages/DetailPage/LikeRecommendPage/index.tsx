import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import { DetailPageWrap } from '../style';
import SearchBar from '@components/common/SearchBar';
import withAuth from '@components/HOC/withAuth';
import WarningMention from '@components/common/warning';
import { useGetPlacesOfLikeRecommend } from '@hooks/api/places';
import Loading from '@components/common/Loading';
import ThumbnailList from '@components/common/ThumbnailList';
import { getNickname } from '@infra/api/nickname';

interface LikeRecommendPageProps {
  userId: Record<string, string>;
}

const LikeRecommendPage = ({ userId }: LikeRecommendPageProps) => {
  const location = useLocation();
  const userNickname = getNickname();
  const { recommendData, isLoading } = useGetPlacesOfLikeRecommend(userId);

  return (
    <DetailPageWrap>
      <SearchBar name={`${location.state.custom.name}`} backIcon={true} />
      {location.state.likeLength ? (
        isLoading ? (
          <LoadingContent>
            <Loading />
            <WaitingTextWrap>
              <p>
                <span>{userNickname}</span>님을 위한 장소를 추천중이에요!
              </p>
              <p>조금만 기다려주세요 :D</p>
            </WaitingTextWrap>
          </LoadingContent>
        ) : recommendData.length === 0 ? (
          <WarningMention text="추천을 위해 찜을 더 눌러주세요 :D" />
        ) : (
          <ThumbnailList places={recommendData} isLoading={isLoading} />
        )
      ) : (
        <WarningMention text="해당 기능을 사용하시려면 장소를 찜해주세요!" />
      )}
    </DetailPageWrap>
  );
};

const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const WaitingTextWrap = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  transform: translate(-50%, -60%);

  p {
    margin: 10px 0;
    color: ${({ theme }) => theme.colors.gray};
    ${({ theme }) => theme.font.B_14};
  }

  span {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export default withAuth(LikeRecommendPage);
