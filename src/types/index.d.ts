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
  id: number;
  image_url: string;
  name: string;
}

// redux store 타입
interface StoreType {
  LocationReducer: {
    currentAddress: string;
  };
}
