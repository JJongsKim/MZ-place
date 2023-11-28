import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@infra/api';

export const useGetPlacesOfHeart = (headerArgs: Record<string, string>) => {
  const { data, ...rest } = useQuery({
    queryKey: ['getPlacesOfHeart'],
    queryFn: () => api.hearts.getHeartList(headerArgs),
    enabled: false,
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
  const queryClient = useQueryClient();

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

      queryClient.refetchQueries({ queryKey: ['getPlacesOfFilter'] });
      queryClient.refetchQueries({ queryKey: ['getInfoByPlaceId'] });
      queryClient.refetchQueries({ queryKey: ['getPlacesNearBy'] });
      queryClient.refetchQueries({ queryKey: ['getPlacesOfTop20'] });
      queryClient.refetchQueries({ queryKey: ['getPlacesOfCategory'] });
      queryClient.refetchQueries({ queryKey: ['getPlacesOfCourse'] });

      return result;
    },
  });
};

export const useDeleteHeart = () => {
  const queryClient = useQueryClient();

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

      queryClient.refetchQueries({ queryKey: ['getPlacesOfFilter'] });
      queryClient.refetchQueries({ queryKey: ['getInfoByPlaceId'] });
      queryClient.refetchQueries({ queryKey: ['getPlacesNearBy'] });
      queryClient.refetchQueries({ queryKey: ['getPlacesOfTop20'] });
      queryClient.refetchQueries({ queryKey: ['getPlacesOfCategory'] });
      queryClient.refetchQueries({ queryKey: ['getPlacesOfCourse'] });

      return result;
    },
  });
};
