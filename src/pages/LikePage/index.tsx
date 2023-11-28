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
import { useGetPlacesOfHeart } from '@hooks/api/heart';
import ThumbnailList from '@components/common/ThumbnailList';
import { useEffect, useState } from 'react';
import Loading from '@components/common/Loading';

interface LikePageProps {
  userId: Record<string, string>;
}

const LikePage = ({ userId }: LikePageProps) => {
  const nickname = getNickname();
  const [heartData, setHeartData] = useState(false);

  const { data } = useGetPlacesOfHeart(userId);

  useEffect(() => {
    if (data) {
      setHeartData(true);
    }
  }, [data]);

  return heartData ? (
    <LikePageWrap>
      <LikePageHeader>
        <HeaderItemWrap>
          <HeaderNameText>{nickname}</HeaderNameText>
          <HeaderText>님이 좋아하는 곳</HeaderText>
        </HeaderItemWrap>
        <HeaderLine />
      </LikePageHeader>
      <ContentArea>
        {data?.length === 0 ? (
          <WarningMention text="아직 찜을 누른 곳이 없어요!" />
        ) : (
          <ThumbnailList places={data} />
        )}
      </ContentArea>
    </LikePageWrap>
  ) : (
    <Loading />
  );
};

export default withAuth(LikePage);
