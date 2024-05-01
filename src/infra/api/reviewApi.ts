/* eslint-disable @typescript-eslint/no-unused-vars */
import { instance } from './instance';

export class ReviewApi {
  constructor(private api: typeof instance) {}

  getReviews = (queryParams: Record<string, string | number>) => {
    return this.api.get('/reviews', {
      params: { ...queryParams },
    });
  };

  postReviews = (headerArgs: Record<string, string>, args: ReviewArgsType) => {
    return this.api.post('/reviews', args, { headers: headerArgs });
  };

  editReviews = (headerArgs: Record<string, string>, args: ReviewArgsType) => {
    return this.api.put('/reviews', args, { headers: headerArgs });
  };

  deleteReviews = (headerArgs: Record<string, string>, args: Record<string, number>) => {
    return this.api.delete('/reviews', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...headerArgs,
      },
      data: { ...args },
    });
  };
}

export default new ReviewApi(instance);
