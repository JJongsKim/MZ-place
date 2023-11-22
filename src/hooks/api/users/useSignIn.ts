import { api } from '@infra/api';
import { setAccessToken } from '@infra/api/token';
import { useMutation } from '@tanstack/react-query';

const useSignIn = () => {
  const { data, ...rest } = useMutation({
    mutationFn: (args: LoginArgsType) => api.auth.login(args),
    onSuccess: data => {
      if (data.data.ACCESS_TOKEN !== undefined) {
        setAccessToken(data.data.ACCESS_TOKEN);
      }
    },
  });

  return { data, ...rest };
};

export default useSignIn;
