import { instance } from './instance';

class PlacesApi {
  constructor(private api: typeof instance) {}

  // - 맞춤 필터 API
  // 쿼리 파라미터로 key-value 형태 넘기기 - value는 string 혹은 number이 될 수 있음
  getPlacesOfFilter = (queryParams: Record<string, string | number>, page: number) => {
    return this.api.get('/places/filtering', { params: { ...queryParams, page: page } });
  };

  // - 카테고리 API
  getPlacesOfCategory = (id: number, page: number, queryParams?: Record<string, string>) => {
    return this.api.get(`/places/category${id}`, { params: { page: page, ...queryParams } });
  };

  // - id별 장소 상세조회 API
  getInfoByPlaceId = (placeId: number) => {
    return this.api.get(`/places/place${placeId}`);
  };

  // - 거리별 장소 상세조회 API
  getPlacesNearBy = (queryParams: Record<string, number>) => {
    return this.api.get('/places/nearby', { params: { ...queryParams } });
  };
}

export default new PlacesApi(instance);
