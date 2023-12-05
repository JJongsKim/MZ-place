/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { api } from '@infra/api';

// - 맞춤 필터 API hook
export const useGetPlacesOfFilter = (
  queryParam?: Record<string, string | number>,
  headerArgs?: Record<string, string>,
) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['getPlacesOfFilter', headerArgs],
    queryFn: ({ pageParam }) => api.places.getPlacesOfFilter(queryParam!, pageParam, headerArgs),
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.data.totalItems) {
        const totalPages = Math.ceil(lastPage.data.totalItems / 12);
        return allPages.length < totalPages ? allPages.length + 1 : undefined;
      }
    },

    retry: 0,
  });

  const filterData = data?.pages.flatMap(page => page.data.result) as PlacesType[];

  return { data: filterData, ...rest };
};

// - 카테고리별 API hook
export const useGetPlacesOfCategory = (
  id: number,
  queryParams?: Record<string, string>,
  headerArgs?: Record<string, string>,
) => {
  const { data, isLoading, ...rest } = useInfiniteQuery({
    queryKey: ['getPlacesOfCategory'],
    queryFn: ({ pageParam }) =>
      api.places.getPlacesOfCategory(id, pageParam, queryParams, headerArgs),
    initialPageParam: 1, // v5 달라진 점

    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.data.total_places) {
        const totalPages = Math.ceil(lastPage.data.total_places / 12);
        return allPages.length < totalPages ? allPages.length + 1 : undefined;
      }
      // return값이 pageParam으로 전달
    },

    retry: 0,
  });

  const placeData = data?.pages.flatMap(page => page?.data.result) as PlacesType[];

  return { data: placeData, isLoading, ...rest };
};

// - 코스 리스트 API hook
export const useGetPlacesOfCourse = (headerArgs?: Record<string, string>) => {
  const { data, isLoading, ...rest } = useInfiniteQuery({
    queryKey: ['getPlacesOfCourse'],
    queryFn: ({ pageParam }) => api.places.getPlacesOfCourse(pageParam, headerArgs),
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.data.total_places) {
        const totalPages = Math.ceil(lastPage.data.total_places / 12);
        return allPages.length < totalPages ? allPages.length + 1 : undefined;
      }
    },

    retry: 0,
  });

  const placeData = data?.pages.flatMap(page => page?.data.result) as PlacesType[];

  return { data: placeData, isLoading, ...rest };
};

// - <일반> 장소 Id별 API hook
export const useGetInfoByPlaceId = (placeId: number, headerArgs?: Record<string, string>) => {
  const { data, isLoading, ...rest } = useQuery({
    queryKey: ['getInfoByPlaceId', headerArgs],
    queryFn: () => api.places.getInfoByPlaceId(placeId, headerArgs),
    retry: 2,
  });

  return { data, isLoading, ...rest };
};

// - <코스> 코스 Id별 API hook
export const useGetInfoByCourseId = (courseId: number, headerArgs?: Record<string, string>) => {
  const { data, isLoading, ...rest } = useQuery({
    queryKey: ['getInfoByCourseId', headerArgs],
    queryFn: () => api.places.getInfoByCourseId(courseId, headerArgs),
    retry: 2,
  });

  return { data, isLoading, ...rest };
};

// - 거리별 조회 API hook
export const useGetPlacesNearBy = (
  queryParams: Record<string, number>,
  headerArgs?: Record<string, string>,
) => {
  const { data, ...rest } = useQuery({
    queryKey: ['getPlacesNearBy', headerArgs],
    queryFn: () => api.places.getPlacesNearBy(queryParams, headerArgs),
    enabled: false,
    retry: 1,
  });

  return { data, ...rest };
};

// - TOP20 API hook
// 헤더 여부에 따라 top20 띄우기
export const useGetPlacesOfTop20 = (headerArgs?: Record<string, string>) => {
  const { data, ...rest } = useQuery({
    queryKey: ['getPlacesOfTop20', headerArgs],
    queryFn: () => api.places.getPlacesOfTop20(headerArgs),
    retry: 1,
  });

  return { data: data?.data.result, ...rest };
};

// - 유저별 찜 기반 장소 추천 API hook
export const useGetPlacesOfLikeRecommend = (headerArgs?: Record<string, string>) => {
  const { data, isLoading, ...rest } = useQuery({
    queryKey: ['getPlacesOfLikeRecommend', headerArgs],
    queryFn: () => api.places.getPlacesOfLikeRecommend(headerArgs),
    retry: 1,
  });

  return { recommendData: data?.data.recommendations as PlacesType[], isLoading, ...rest };
};
