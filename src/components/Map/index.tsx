/* eslint-disable @typescript-eslint/no-unused-vars */
import { REGION_ARRAY } from '@application/constant';
import Loading from '@components/common/Loading';
import useGeoLocation from '@hooks/useGeoLocation';

import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';

interface MapProps {
  currentAddress: string;
}

const geoLocationOptions = {
  timeout: 6000,
};

const Map = ({ currentAddress }: MapProps) => {
  const mapRef = useRef(null);

  const { location } = useGeoLocation(geoLocationOptions);
  const currentLocation = {
    latitude: location.latitude,
    longitude: location.longitude,
  };

  useEffect(() => {
    if (!location.isLoading) {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        let mapOption;

        if (currentAddress === '현 위치') {
          mapOption = {
            center: new window.kakao.maps.LatLng(
              currentLocation.latitude,
              currentLocation.longitude,
            ),
            level: 3,
          };
        } else {
          const selectedRegion = REGION_ARRAY.find(
            region => region.locationName === currentAddress,
          );
          if (selectedRegion) {
            mapOption = {
              center: new window.kakao.maps.LatLng(
                selectedRegion.latitude,
                selectedRegion.longitude,
              ),
              level: 5,
            };
          }
        }

        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        mapRef.current = map; // 지도 객체 저장해놓기

        // 지도 레벨 6이하일때만 API 호출
        window.kakao.maps.event.addListener(map, 'dragend', function () {
          const bounds = map.getBounds();

          window.kakao.maps.event.addListener(map, 'zoom_changed', function () {
            const level = map.getLevel();

            if (level <= 6) {
              const zoomBounds = map.getBounds();
              console.log('줌+ 북동쪽 위도경도', zoomBounds.getNorthEast());
              console.log('줌+ 남서쪽 위도경도', zoomBounds.getSouthWest());
            }
          });

          console.log('마지막 북동쪽 위도경도', bounds.getNorthEast());
          console.log('마지막 남서쪽 위도경도', bounds.getSouthWest());
        });

        return map;
      });
    }
  }, [location, currentAddress]);

  return location?.isLoading ? <Loading /> : <MapWrap id="map" />;
};

const MapWrap = styled.div`
  width: 375px;
  height: 500px;
  margin: 0 auto;
`;

export default Map;
