export interface NavType {
  name: string;
  svg: string;
  path: string;
}

export interface GeolocationType {
  latitude: number | null;
  longitude: number | null;
  isLoading: boolean;
}

export interface GeolocationAddress {
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
}

// redux store 타입
export interface StoreType {
  LocationReducer: {
    currentAddress: string;
  };
}
