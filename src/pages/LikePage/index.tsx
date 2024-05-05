import { useEffect, useState } from 'react';

import * as S from './style';
import WarningMention from '@components/common/warning';
import ThumbnailList from '@components/common/ThumbnailList';
import Loading from '@components/common/Loading';
import withAuth from '@components/HOC/withAuth';

import { getNickname } from '@infra/api/nickname';
import { useGetPlacesOfHeart } from '@hooks/api/heart';

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
    <S.LikePageWrap>
      <S.LikePageHeader>
        <S.HeaderItemWrap>
          <S.HeaderNameText>{nickname}</S.HeaderNameText>
          <S.HeaderText>님이 좋아하는 곳</S.HeaderText>
        </S.HeaderItemWrap>
        <S.HeaderLine />
      </S.LikePageHeader>
      <S.ContentArea>
        {data?.length === 0 ? (
          <WarningMention text="아직 찜을 누른 곳이 없어요!" />
        ) : (
          <ThumbnailList places={data} />
        )}
      </S.ContentArea>
    </S.LikePageWrap>
  ) : (
    <Loading />
  );
};

export default withAuth(LikePage);
