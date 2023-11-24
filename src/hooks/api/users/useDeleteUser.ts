import { useMutation } from '@tanstack/react-query';

import { api } from '@infra/api';
import { removeAccessToken } from '@infra/api/token';
import { removeNickname } from '@infra/api/nickname';

const useDeleteUser = () => {
  const { ...rest } = useMutation({
    mutationFn: (args: DeleteUserArgsType) => api.auth.deleteUser(args),
    onSuccess: data => {
      if (data.data.message === 'USER_DELETED') {
        removeAccessToken();
        removeNickname();
      }
    },
  });

  return { ...rest };
};

export default useDeleteUser;
