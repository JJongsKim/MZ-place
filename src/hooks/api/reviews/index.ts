import { useQuery, useMutation } from '@tanstack/react-query';
import { api } from '@infra/api';

// - 리뷰 조회 API hook
export const useGetReviews = (args: Record<string, string>) => {
  const { data, ...rest } = useQuery({
    queryKey: ['getReviews'],
    queryFn: () => api.reviews.getReviews(args),
    retry: 1,
  });

  return { data, ...rest };
};

// - 리뷰 작성 API hook
export const usePostReviews = () => {
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
  });
};

// - 리뷰 수정 API hook
export const useEditReviews = () => {
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
  });
};

// - 리뷰 삭제 API hook
export const useDeleteReviews = () => {
  return useMutation({
    mutationKey: ['deleteReviews'],
    mutationFn: async ({
      args,
      headerArgs,
    }: {
      args: Record<string, string>;
      headerArgs: Record<string, string>;
    }) => {
      const result = await api.reviews.deleteReviews(headerArgs, args);

      return result;
    },
  });
};
