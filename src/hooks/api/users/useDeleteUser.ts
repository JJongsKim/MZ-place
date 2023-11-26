import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';

import { api } from '@infra/api';
import { removeAccessToken } from '@infra/api/token';
import { removeNickname } from '@infra/api/nickname';
import { setUserId } from '@store/reducers/UserIdReducer';

const useDeleteUser = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (args: Record<string, string>) => api.auth.deleteUser(args),
    onSuccess: data => {
      if (data.data.message === 'USER_DELETED') {
        removeAccessToken();
        removeNickname();
        dispatch(setUserId({}));
      }
    },
  });
};

export default useDeleteUser;
