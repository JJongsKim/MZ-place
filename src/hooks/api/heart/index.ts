import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

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

      return result;
    },

    onSuccess: data => {
      if (data.data.message === 'ADD_TO_HEART_SUCCESS') {
        queryClient.invalidateQueries({ queryKey: ['getPlacesOfTop20'] });
        queryClient.invalidateQueries({ queryKey: ['getPlacesOfCategory'] });
        queryClient.invalidateQueries({ queryKey: ['getInfoByPlaceId'] });
        queryClient.invalidateQueries({ queryKey: ['getPlacesOfFilter'] });
        queryClient.invalidateQueries({ queryKey: ['getPlacesNearBy'] });
      }
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

      return result;
    },

    onSuccess: data => {
      if (data.data.message === 'DELETE_SUCCESS') {
        queryClient.invalidateQueries({ queryKey: ['getPlacesOfTop20'] });
        queryClient.invalidateQueries({ queryKey: ['getPlacesOfCategory'] });
        queryClient.invalidateQueries({ queryKey: ['getInfoByPlaceId'] });
        queryClient.invalidateQueries({ queryKey: ['getPlacesOfFilter'] });
        queryClient.invalidateQueries({ queryKey: ['getPlacesNearBy'] });
      }
    },
  });
};
