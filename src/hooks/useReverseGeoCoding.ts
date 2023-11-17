/* eslint-disable no-console */
import { useEffect, useState } from 'react';

interface ReverseGeoCodingProps {
  latitude: string;
  longitude: string;
  placeId: number;
}

export default function useReverseGeoCoding({
  latitude,
  longitude,
  placeId,
}: ReverseGeoCodingProps) {
  const [address, setAddress] = useState('');

  useEffect(() => {
    window.kakao.maps.load(() => {
      const geocoder = new window.kakao.maps.services.Geocoder();

      // geoding 돌릴 함수 -> 파라미터에는 응답으로 받아올 것들의 타입넣기
      const reverseGeocoding = (res: GeolocationAddress[], status: boolean) => {
        if (status === window.kakao.maps.services.Status.OK) {
          return setAddress(res[0].address.address_name);
        } else {
          console.error('주소 변환 실패!');
        }
      };

      geocoder.coord2Address(Number(longitude), Number(latitude), reverseGeocoding);
    });
  }, [placeId]);

  return address;
}
