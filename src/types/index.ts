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
