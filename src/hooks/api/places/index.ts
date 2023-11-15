import { useQuery } from '@tanstack/react-query';

import { api } from '@infra/api';

export const useGetPlacesOfFilter = (queryParams?: Record<string, string | number>) => {
  const { data, ...rest } = useQuery({
    queryKey: ['getPlacesOfFilter'],
    queryFn: () => api.places.getPlacesOfFilter(queryParams!),
    enabled: false, // 자동 실행 끄기
  });
  return { data, ...rest };
};
