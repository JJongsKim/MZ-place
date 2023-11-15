import { instance } from './instance';

class PlacesApi {
  constructor(private api: typeof instance) {}

  // - 맞춤 필터 API
  // 쿼리 파라미터로 key-value 형태 넘기기 - value는 string 혹은 number이 될 수 있음
  getPlacesOfFilter = (queryParams: Record<string, string | number>, page: number) => {
    return this.api.get('/places/filtering', { params: { ...queryParams, page: page } });
  };
}

export default new PlacesApi(instance);
