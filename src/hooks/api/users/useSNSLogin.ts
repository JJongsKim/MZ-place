import { useMutation } from '@tanstack/react-query';

import { api } from '@infra/api';
import { setAccessToken } from '@infra/api/token';
import { setNickname } from '@infra/api/nickname';

export const useKakaoLogin = (token: string) => {
  const { ...rest } = useMutation({
    mutationFn: (args: KakaoLoginArgsType) => api.auth.kakaoLogin(args),
    onSuccess: data => {
      if (data.data.message === 'LOGIN_SUCCESS') {
        setAccessToken(token);
        setNickname(data.data.nickname!);
      }
    },
  });

  return { ...rest };
};
