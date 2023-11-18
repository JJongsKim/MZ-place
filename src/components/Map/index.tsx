/* eslint-disable no-console */
import { REGION_ARRAY } from '@application/constant';
import Loading from '@components/common/Loading';
import { useGetPlacesNearBy } from '@hooks/api/places';
import useGeoLocation from '@hooks/useGeoLocation';
import { setPlacesOfMap } from '@store/reducers/PlacesOfMapReducer';

import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';

interface MapProps {
  currentAddress: string;
}

const geoLocationOptions = {
  timeout: 6000,
};

const Map = ({ currentAddress }: MapProps) => {
  const dispatch = useDispatch();
  const mapRef = useRef(null);

  const { location } = useGeoLocation(geoLocationOptions);
  const currentLocation = {
    latitude: location.latitude,
    longitude: location.longitude,
  };

  const [LatLngRange, setLatLngRange] = useState({
    wsLat: 0,
    wsLng: 0,
    neLat: 0,
    neLng: 0,
  });
  const { wsLat, wsLng, neLat, neLng } = LatLngRange;
  const { refetch } = useGetPlacesNearBy({
    ws_latitude: wsLat,
    ws_longitude: wsLng,
    ne_latitude: neLat,
    ne_longitude: neLng,
  });

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
          window.kakao.maps.event.addListener(map, 'zoom_changed', function () {
            const level = map.getLevel();

            if (level <= 6) {
              const zoomBounds = map.getBounds();
              setLatLngRange({
                wsLat: zoomBounds.getSouthWest().Ma,
                wsLng: zoomBounds.getSouthWest().La,
                neLat: zoomBounds.getNorthEast().Ma,
                neLng: zoomBounds.getNorthEast().La,
              });
            }
          });

          const bounds = map.getBounds();
          setLatLngRange({
            wsLat: bounds.getSouthWest().Ma,
            wsLng: bounds.getSouthWest().La,
            neLat: bounds.getNorthEast().Ma,
            neLng: bounds.getNorthEast().La,
          });
        });

        return map;
      });
    }
  }, [location, currentAddress]);

  /*
    현재 지역 | 위도 경도가 변경될 시 refetch 실행
    새로운 데이터 값이 반환될 때까지 기다린 후 리듀서 함수 실행

    장소 데이터 마커 추가
  */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await refetch();
        dispatch(setPlacesOfMap(data?.data.result));
      } catch (error) {
        console.error('!!!refetch 에러!!!', error);
      }
    };

    fetchData();
  }, [currentAddress, LatLngRange]);

  return location?.isLoading ? <Loading /> : <MapWrap id="map" />;
};

const MapWrap = styled.div`
  width: 375px;
  height: 500px;
  margin: 0 auto;
`;

export default Map;
