import { api } from '@infra/api';
import { setNickname } from '@infra/api/nickname';
import { setAccessToken } from '@infra/api/token';
import { useMutation } from '@tanstack/react-query';

const useSignIn = () => {
  const { ...rest } = useMutation({
    mutationFn: (args: LoginArgsType) => api.auth.login(args),
    onSuccess: data => {
      if (data.data.ACCESS_TOKEN !== undefined) {
        setAccessToken(data.data.ACCESS_TOKEN);
        setNickname(data.data.nickname!);
      }
    },
  });

  return { ...rest };
};

export default useSignIn;
