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
    enabled: false,
  });

  return { data, isLoading, ...rest };
};
