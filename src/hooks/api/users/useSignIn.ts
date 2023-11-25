import { useDispatch } from 'react-redux';

import { api } from '@infra/api';
import { setNickname } from '@infra/api/nickname';
import { setAccessToken } from '@infra/api/token';
import { useMutation } from '@tanstack/react-query';
import { setUserId } from '@store/reducers/UserIdReducer';

const useSignIn = () => {
  const dispatch = useDispatch();

  const { ...rest } = useMutation({
    mutationFn: (args: LoginArgsType) => api.auth.login(args),
    onSuccess: data => {
      if (data.data.ACCESS_TOKEN !== undefined) {
        setAccessToken(data.data.ACCESS_TOKEN);
        setNickname(data.data.nickname!);
        dispatch(setUserId({ local_token: data.data.ACCESS_TOKEN }));
      }
    },
  });

  return { ...rest };
};

export default useSignIn;
