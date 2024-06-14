import { useQuery, useMutation } from '@tanstack/react-query';

import { api } from '@infra/api';

export const useGetPlacesOfHeart = (headerArgs: Record<string, string>) => {
  const { data, ...rest } = useQuery({
    queryKey: ['getPlacesOfHeart'],
    queryFn: () => api.hearts.getHeartList(headerArgs),
    retry: 1,
  });

  const heartPlaceData: HeartPlacesType[] = [];
  const idsSet = new Set<number>();

  if (data?.data.hearts) {
    data.data.hearts.map((place: HeartPlacesType) => {
      if (!idsSet.has(place.id)) {
        idsSet.add(place.id);
        heartPlaceData.push(place);
      }
    });
  }

  return { data: heartPlaceData, ...rest };
};

export const usePushHeart = () => {
  return useMutation({
    mutationKey: ['pushHeart'],
    mutationFn: async ({
      args,
      headerArgs,
    }: {
      args: HeartDataArgsType;
      headerArgs: Record<string, string>;
    }) => {
      const result = await api.hearts.pushHeart(args, headerArgs);

      return result;
    },
  });
};

export const useDeleteHeart = () => {
  return useMutation({
    mutationKey: ['deleteHeart'],
    mutationFn: async ({
      args,
      headerArgs,
    }: {
      args: HeartDataArgsType;
      headerArgs: Record<string, string>;
    }) => {
      const result = await api.hearts.deleteHeart(args, headerArgs);

      return result;
    },
  });
};
