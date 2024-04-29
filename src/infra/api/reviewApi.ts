import { instance } from './instance';

export class ReviewApi {
  constructor(private api: typeof instance) {}

  getReviews = (args: Record<string, string>) => {
    return this.api.get('/reviews', args);
  };

  postReviews = (headerArgs: Record<string, string>, args: ReviewArgsType) => {
    return this.api.post('/reviews', args, { headers: headerArgs });
  };

  editReviews = (headerArgs: Record<string, string>, args: ReviewArgsType) => {
    return this.api.put('/reviews', args, { headers: headerArgs });
  };

  deleteReviews = (headerArgs: Record<string, string>, args: Record<string, string>) => {
    return this.api.delete('/reviews', {
      headers: headerArgs,
      data: args,
    });
  };
}

export default new ReviewApi(instance);
