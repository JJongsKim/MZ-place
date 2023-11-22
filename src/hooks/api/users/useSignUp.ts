import { useMutation } from '@tanstack/react-query';

import { api } from '@infra/api';

const useSignUp = () => {
  const { data, ...rest } = useMutation({
    mutationFn: (args: SignUpArgsType) => api.auth.signUp(args),
  });

  return { data, ...rest };
};

export default useSignUp;
