/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { REGION_ARRAY } from '@application/constant';
import Loading from '@components/common/Loading';
import { useGetPlacesNearBy } from '@hooks/api/places';
import useGeoLocation from '@hooks/useGeoLocation';
import { setPlacesOfMap } from '@store/reducers/PlacesOfMapReducer';

import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';

import Marker from '@assets/marker.svg';
import MyLocation from '@assets/my-location.svg';

interface MapProps {
  currentAddress: string;
}

const geoLocationOptions = {
  timeout: 6000,
};

const Map = ({ currentAddress }: MapProps) => {
  const dispatch = useDispatch();
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState<(typeof window.kakao.maps.Marker)[]>([]); // 마커 초기화를 위한 상태값

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

  const handleChangeLatLng = (bounds: any) => {
    setLatLngRange({
      wsLat: bounds.getSouthWest().Ma,
      wsLng: bounds.getSouthWest().La,
      neLat: bounds.getNorthEast().Ma,
      neLng: bounds.getNorthEast().La,
    });
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
              level: 4,
            };
          }
        }

        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        mapRef.current = map; // 지도 객체 저장해놓기

        // 현 위치 전용 마커 표시
        if (currentAddress === '현 위치') {
          const coords = new window.kakao.maps.LatLng(
            currentLocation.latitude,
            currentLocation.longitude,
          );
          const myLocationImageInfo = {
            imageSrc: MyLocation,
            imageSize: new window.kakao.maps.Size(26, 26),
          };
          const myLocationImage = new window.kakao.maps.MarkerImage(
            myLocationImageInfo.imageSrc,
            myLocationImageInfo.imageSize,
            null,
          );

          const marker = new window.kakao.maps.Marker({
            position: coords,
            image: myLocationImage,
          });
          marker.setMap(map);
        }

        window.kakao.maps.event.addListener(map, 'dragend', function () {
          let level = map.getLevel();
          if (level <= 4) {
            const bounds = map.getBounds();
            handleChangeLatLng(bounds);
          }

          window.kakao.maps.event.addListener(map, 'zoom_changed', function () {
            level = map.getLevel();
            if (level <= 4) {
              const zoomBounds = map.getBounds();
              handleChangeLatLng(zoomBounds);
            }
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

        if (mapRef.current) {
          const places = data?.data.result || [];

          const markerImageInfo = {
            imageSrc: Marker,
            imageSize: new window.kakao.maps.Size(28, 40),
          };
          const markerImage = new window.kakao.maps.MarkerImage(
            markerImageInfo.imageSrc,
            markerImageInfo.imageSize,
            null,
          );

          if (Array.isArray(places)) {
            // 위치 변경 시 마커가 초기화 될 수 있도록 코드 추가
            markers.map(existingMarker => existingMarker.setMap(null));

            const newMarkers = places.map(place => {
              const position = new window.kakao.maps.LatLng(place.latitude, place.longitude);
              const marker = new window.kakao.maps.Marker({ position, image: markerImage });

              // 장소 이름 - 인포윈도우로 띄우기
              window.kakao.maps.event.addListener(marker, 'click', function () {
                const infowindow = new window.kakao.maps.InfoWindow({
                  content: `
                    <div style="display: flex; align-items: center; margin: 8px 5px 10px; padding-right: 20px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                      <p style="font-size: 13px; font-weight: bold;">${place.name}</p>
                    </div>
                  `,
                  removable: true,
                });

                infowindow.open(mapRef.current, marker);
              });

              return marker;
            });

            newMarkers.map(item => item.setMap(mapRef.current));
            setMarkers(newMarkers);
          }
        }
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
