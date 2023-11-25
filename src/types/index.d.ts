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
  name: string;
  duration_time: string;
  price: string;
  image_url?: string;
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

interface NaverLoginArgsType {
  nickname: string;
  naver_id: string;
}

interface HeartDataArgsType {
  type: 'c' | 'p';
  course_id?: number;
  place_id?: number;
}

// redux store 타입
interface StoreType {
  LocationReducer: {
    currentAddress: string;
  };
  PlacesOfMapReducer: {
    placesOfMap: PlacesOfMap[];
  };
  UserIdReducer: {
    userId: Record<string, string>;
  };
}
