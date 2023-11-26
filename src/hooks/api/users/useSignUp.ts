import { useMutation } from '@tanstack/react-query';

import { api } from '@infra/api';

const useSignUp = () => {
  return useMutation({
    mutationFn: (args: SignUpArgsType) => api.auth.signUp(args),
  });
};

export default useSignUp;
