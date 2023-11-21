import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { api } from '@infra/api';

export const useGetPlacesOfFilter = (queryParam?: Record<string, string | number>) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['getPlacesOfFilter'],
    queryFn: ({ pageParam }) => api.places.getPlacesOfFilter(queryParam!, pageParam),
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      const totalPages = Math.ceil(lastPage.data.totalItems / 12);
      return allPages.length !== totalPages ? allPages.length + 1 : undefined;
    },

    retry: 0,
    enabled: false,
  });

  const filterPlaceData = data?.pages.flatMap(page => page.data.result) as PlacesType[];

  return { data: filterPlaceData, ...rest };
};

export const useGetPlacesOfCategory = (id: number, queryParams?: Record<string, string>) => {
  const { data, isLoading, ...rest } = useInfiniteQuery({
    queryKey: ['getPlacesOfCategory'],
    queryFn: ({ pageParam }) => api.places.getPlacesOfCategory(id, pageParam, queryParams),
    initialPageParam: 1, // v5 달라진 점

    getNextPageParam: (lastPage, allPages) => {
      const totalPages = Math.ceil(lastPage.data.totalItems / 12);
      return allPages.length !== totalPages ? allPages.length + 1 : undefined; // return값이 pageParam으로 전달
    },

    retry: 0,
  });

  const placeData = data?.pages.flatMap(page => page?.data.result) as PlacesType[];

  return { data: placeData, isLoading, ...rest };
};

export const useGetInfoByPlaceId = (placeId: number) => {
  const { data, isLoading, ...rest } = useQuery({
    queryKey: ['getInfoByPlaceId'],
    queryFn: () => api.places.getInfoByPlaceId(placeId),
    retry: 2,
  });

  return { data, isLoading, ...rest };
};
