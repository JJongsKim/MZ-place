import { useDispatch } from 'react-redux';

import { api } from '@infra/api';
import { setNickname } from '@infra/api/nickname';
import { setAccessToken } from '@infra/api/token';
import { useMutation } from '@tanstack/react-query';
import { setUserId } from '@store/reducers/UserIdReducer';
import RecentViewPlaces from '@hooks/localStorage/RecentViewPlaces';

const useSignIn = () => {
  const dispatch = useDispatch();
  const { handleRemoveRecentPlace } = RecentViewPlaces();

  return useMutation({
    mutationFn: (args: LoginArgsType) => api.auth.login(args),
    onSuccess: data => {
      if (data.data.ACCESS_TOKEN !== undefined) {
        setAccessToken(data.data.ACCESS_TOKEN);
        setNickname(data.data.nickname!);
        handleRemoveRecentPlace();
        dispatch(setUserId({ local_token: data.data.ACCESS_TOKEN }));
      }
    },
  });
};

export default useSignIn;
