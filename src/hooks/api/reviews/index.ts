import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@infra/api';

// - 리뷰 조회 API hook
export const useGetReviews = (queryParams: Record<string, string | number>) => {
  const { data, ...rest } = useQuery({
    queryKey: ['getReviews'],
    queryFn: () => api.reviews.getReviews(queryParams),
    retry: 1,
  });

  return { data, ...rest };
};

// - 리뷰 작성 API hook
export const usePostReviews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['postReviews'],
    mutationFn: async ({
      args,
      headerArgs,
    }: {
      args: ReviewArgsType;
      headerArgs: Record<string, string>;
    }) => {
      const result = await api.reviews.postReviews(headerArgs, args);

      return result;
    },

    onSuccess: data => {
      if (data.data.message === 'POST_REVIEW_SUCCESS') {
        queryClient.invalidateQueries({ queryKey: ['getReviews'] });
      }
    },
  });
};

// - 리뷰 수정 API hook
export const useEditReviews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['editReviews'],
    mutationFn: async ({
      args,
      headerArgs,
    }: {
      args: ReviewArgsType;
      headerArgs: Record<string, string>;
    }) => {
      const result = await api.reviews.editReviews(headerArgs, args);

      return result;
    },

    onSuccess: data => {
      if (data.data.message === 'REVIEW_UPDATED') {
        queryClient.invalidateQueries({ queryKey: ['getReviews'] });
      }
    },
  });
};

// - 리뷰 삭제 API hook
export const useDeleteReviews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['deleteReviews'],
    mutationFn: async ({
      args,
      headerArgs,
    }: {
      args: Record<string, number>;
      headerArgs: Record<string, string>;
    }) => {
      const result = await api.reviews.deleteReviews(headerArgs, args);

      return result;
    },

    onSuccess: data => {
      if (data.data.message === 'DELETE_SUCCESS') {
        queryClient.invalidateQueries({ queryKey: ['getReviews'] });
      }
    },
  });
};
