import { instance } from './instance';

export class HeartApi {
  constructor(private api: typeof instance) {}

  pushHeart = (args: HeartDataArgsType, headerArgs: Record<string, string>) => {
    return this.api.post('/hearts', args, {
      headers: headerArgs,
    });
  };

  deleteHeart = (args: HeartDataArgsType, headerArgs: Record<string, string>) => {
    return this.api.delete('/hearts', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...headerArgs,
      },
      data: { ...args },
    });
  };

  getHeartList = (headerArgs: Record<string, string>) => {
    return this.api.get('/hearts', {
      headers: headerArgs,
    });
  };
}

export default new HeartApi(instance);
