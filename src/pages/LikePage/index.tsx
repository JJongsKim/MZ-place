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
import { getNickname } from '@infra/api/nickname';
import { useSelector } from 'react-redux';
import { useGetPlacesOfHeart } from '@hooks/api/heart';
import ThumbnailList from '@components/common/ThumbnailList';
import { useEffect } from 'react';

const LikePage = () => {
  const userId = useSelector((state: StoreType) => state.UserIdReducer.userId);
  const nickname = getNickname();

  const { data, refetch } = useGetPlacesOfHeart(userId);
  const heartPlaces = data as HeartPlacesType[];

  useEffect(() => {
    refetch();
  }, []);

  return (
    <LikePageWrap>
      <LikePageHeader>
        <HeaderItemWrap>
          <HeaderNameText>{nickname}</HeaderNameText>
          <HeaderText>님이 좋아하는 곳</HeaderText>
        </HeaderItemWrap>
        <HeaderLine />
      </LikePageHeader>
      <ContentArea>
        {heartPlaces?.length === 0 ? (
          <WarningMention text="아직 찜을 누른 곳이 없어요!" />
        ) : (
          <ThumbnailList places={heartPlaces} />
        )}
      </ContentArea>
    </LikePageWrap>
  );
};

export default withAuth(LikePage);
