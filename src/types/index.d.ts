interface NavType {
  name: string;
  svg: string;
  path: string;
}

interface GeolocationType {
  latitude: number | null;
  longitude: number | null;
  isLoading: boolean;
}

interface GeolocationAddress {
  address: {
    address_name: string;
    main_address_no: string;
    mountain_yn: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    sub_address_no: string;
    zip_code: string;
  };
  x: number;
  y: number;
}

interface RecentPlacesType {
  id: number;
  image_url: string;
  name: string;
  type: string;
}

interface PlacesType {
  heart: number;
  id: number;
  image_url: string;
  name: string;
  type?: 'place' | 'course';
}

interface HeartPlacesType {
  heart_id: number;
  heart: number;
  id: number;
  type: 'place' | 'course';
  name: string;
  image_url: string;
}

interface PlacesOfMap extends PlacesType {
  latitude: string;
  longitude: string;
}

interface PlaceType {
  category_id: number;
  description: string;
  destrict: string;
  id: number;
  heart: number;
  latitude: string;
  longitude: string;
  name: string;
  price: string;
  related_course?: CourseType[];
  image_url?: string;
  page_url?: string;
  phone_number?: string;
  work_time?: string;
}

interface CourseType {
  id: number;
  heart: number;
  name: string;
  duration_time: string;
  price: string;
  image_url?: string;
  places: CoursePlaceType[];
}

interface CoursePlaceType {
  heart: number;
  order_number: number;
  place_id: number;
  place_image_url: string;
  place_name: string;
  place_latitude: string;
  place_longitude: string;
}

// 회원가입용 API 전달 타입
interface SignUpArgsType {
  nickname: string;
  user_id: string;
  password: string;
}

// 로그인 API 전달 타입
interface LoginArgsType {
  user_id: string;
  password: string;
}

interface KakaoLoginArgsType {
  nickname: string;
  kakao_id: string;
}

interface HeartDataArgsType {
  course_id?: number;
  place_id?: number;
}

interface ReviewArgsType {
  course_id?: number;
  place_id?: number;
  content: string;
  rating: number;
}

interface ReviewDataType {
  content: string;
  created_at: string;
  id: number;
  rating: number;
  updated_at: string;
  user: string;
}

// redux store 타입
interface StoreType {
  LocationReducer: {
    currentAddress: string;
  };
  FilterReducer: {
    costFilter: string[];
    activityFilter: number[];
    locationFilter: string[];
    submitFilter: boolean;
  };
  PlacesOfFilterReducer: {
    placesOfFilter: PlacesType[];
  };
  PlacesOfMapReducer: {
    placesOfMap: PlacesOfMap[];
  };
  UserIdReducer: {
    userId: Record<string, string>;
  };
}
