/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';

import { api } from '@infra/api';
import { setKakaoId, setNaverId } from '@infra/api/token';
import { setNickname } from '@infra/api/nickname';
import { setUserId } from '@store/reducers/UserIdReducer';
import RecentViewPlaces from '@hooks/localStorage/RecentViewPlaces';

export const useKakaoLogin = (kakaoId: string) => {
  const dispatch = useDispatch();
  const { handleRemoveRecentPlace } = RecentViewPlaces();

  return useMutation({
    mutationFn: (args: KakaoLoginArgsType) => api.auth.kakaoLogin(args),
    onSuccess: data => {
      if (data.data.message === 'LOGIN_SUCCESS') {
        setKakaoId(kakaoId);
        setNickname(data.data.nickname!);
        handleRemoveRecentPlace();
        dispatch(setUserId({ 'kakao-id': kakaoId }));
      }
    },
  });
};

export const useNaverLogin = () => {
  const dispatch = useDispatch();
  const { handleRemoveRecentPlace } = RecentViewPlaces();

  return useMutation({
    mutationFn: (code: string) => api.auth.naverLogin(code),
    onSuccess: data => {
      if (data.data.message === 'User login' || data.data.message === 'User signup') {
        setNaverId(data.data.naver_id);
        setNickname(data.data.name);
        handleRemoveRecentPlace();
        dispatch(setUserId({ 'naver-id': data.data.naver_id }));
      }
    },
  });
};
