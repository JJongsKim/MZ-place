import { useEffect, useState } from 'react';

export default function useGeoLocation(options: { timeout: number }) {
  const [location, setLocation] = useState<GeolocationType>({
    latitude: null,
    longitude: null,
    isLoading: true,
  });
  const [error, setError] = useState('');

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
      isLoading: false,
    });
  };

  const handleError = (err: GeolocationPositionError) => {
    setError(err.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('Geolocation을 사용할 수 없어요!');
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options]);

  return { location, error };
}
