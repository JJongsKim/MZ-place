/* eslint-disable @typescript-eslint/no-unused-vars */
import type { UseInfiniteQueryResult } from '@tanstack/react-query';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { api } from '@infra/api';

export const useGetPlacesOfFilter = (queryParams?: Record<string, string | number>) => {
  const { data, ...rest } = useQuery({
    queryKey: ['getPlacesOfFilter'],
    queryFn: () => api.places.getPlacesOfFilter(queryParams!, 1),
    enabled: false, // 자동 실행 끄기
  });
  return { data, ...rest };
};

export const useGetPlacesOfCategory = (id: number, queryParams?: Record<string, string>) => {
  const { data, isLoading, ...rest } = useQuery({
    queryKey: ['getPlacesOfCategory'],
    queryFn: () => api.places.getPlacesOfCategory(id, 1, queryParams),
    retry: 2,
  });

  return { data, isLoading, ...rest };
};

export const useGetInfoByPlaceId = (placeId: number) => {
  const { data, isLoading, ...rest } = useQuery({
    queryKey: ['getInfoByPlaceId'],
    queryFn: () => api.places.getInfoByPlaceId(placeId),
    retry: 2,
  });

  return { isLoading, ...rest, place: data?.data.result };
};
