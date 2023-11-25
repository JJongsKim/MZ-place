import { useQuery, useMutation } from '@tanstack/react-query';

import { api } from '@infra/api';

export const useGetPlacesOfHeart = (headerArgs: Record<string, string>) => {
  const { data, ...rest } = useQuery({
    queryKey: ['getPlacesOfHeart'],
    queryFn: () => api.hearts.getHeartList(headerArgs),
    enabled: false,
    retry: 1,
  });

  return { data: data?.data.hearts, ...rest };
};

export const usePushHeart = () => {
  const { ...rest } = useMutation({
    mutationFn: ({
      args,
      headerArgs,
    }: {
      args: HeartDataArgsType;
      headerArgs: Record<string, string>;
    }) => api.hearts.pushHeart(args, headerArgs),
  });

  return { ...rest };
};

export const useDeleteHeart = () => {
  const { ...rest } = useMutation({
    mutationFn: ({
      args,
      headerArgs,
    }: {
      args: HeartDataArgsType;
      headerArgs: Record<string, string>;
    }) => api.hearts.deleteHeart(args, headerArgs),
  });

  return { ...rest };
};
