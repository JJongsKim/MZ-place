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

// redux store 타입
interface StoreType {
  LocationReducer: {
    currentAddress: string;
  };
  PlacesOfMapReducer: {
    placesOfMap: PlacesOfMap[];
  };
}
