import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';

import { api } from '@infra/api';
import { setKakaoId, setNaverId } from '@infra/api/token';
import { setNickname } from '@infra/api/nickname';
import { setUserId } from '@store/reducers/UserIdReducer';

export const useKakaoLogin = (kakaoId: string) => {
  const dispatch = useDispatch();

  const { ...rest } = useMutation({
    mutationFn: (args: KakaoLoginArgsType) => api.auth.kakaoLogin(args),
    onSuccess: data => {
      if (data.data.message === 'LOGIN_SUCCESS') {
        setKakaoId(kakaoId);
        setNickname(data.data.nickname!);
        dispatch(setUserId({ kakao_id: kakaoId }));
      }
    },
  });

  return { ...rest };
};

export const useNaverLogin = (naverId: string) => {
  const dispatch = useDispatch();

  const { ...rest } = useMutation({
    mutationFn: (args: NaverLoginArgsType) => api.auth.naverLogin(args),
    onSuccess: data => {
      if (data.data.message === 'LOGIN_SUCCESS') {
        setNaverId(naverId);
        setNickname(data.data.nickname!);
        dispatch(setUserId({ naver_id: naverId }));
      }
    },
  });

  return { ...rest };
};
