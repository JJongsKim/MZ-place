import { useQuery } from '@tanstack/react-query';

import { api } from '@infra/api';

export const useGetPlacesOfFilter = (queryParams: Record<string, string | number>) => {
  const { data } = useQuery({
    queryKey: ['getPlacesOfFilter'],
    queryFn: () => api.places.getPlacesOfFilter(queryParams),
  });
  return data;
};
