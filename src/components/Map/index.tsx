import { REGION_ARRAY } from '@application/constant';
import Loading from '@components/common/Loading';
import useGeoLocation from '@hooks/useGeoLocation';

import { useEffect } from 'react';
import { styled } from 'styled-components';

interface MapProps {
  currentAddress: string;
}

const geoLocationOptions = {
  timeout: 6000,
};

const Map = ({ currentAddress }: MapProps) => {
  const { location } = useGeoLocation(geoLocationOptions);
  const currentLocation = {
    latitude: location.latitude,
    longitude: location.longitude,
  };

  const mapScript = document.createElement('script');
  mapScript.async = true;
  mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API_KEY}&autoload=false&libraries=services,clusterer,drawing`;
  document.head.appendChild(mapScript);

  useEffect(() => {
    if (!location.isLoading) {
      const onLoadKakaoMap = () => {
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

          return map;
        });
      };

      mapScript.addEventListener('load', onLoadKakaoMap);

      return () => mapScript.removeEventListener('load', onLoadKakaoMap);
    }
  }, [location, currentAddress]);

  return location?.isLoading ? <Loading /> : <MapWrap id="map" />;
};

const MapWrap = styled.div`
  width: 375px;
  height: 500px;
  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    width: 850px;
    height: 600px;
  }
`;

export default Map;
