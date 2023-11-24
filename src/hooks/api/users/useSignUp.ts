import { useMutation } from '@tanstack/react-query';

import { api } from '@infra/api';

const useSignUp = () => {
  const { ...rest } = useMutation({
    mutationFn: (args: SignUpArgsType) => api.auth.signUp(args),
  });

  return { ...rest };
};

export default useSignUp;
