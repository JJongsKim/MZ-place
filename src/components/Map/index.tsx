/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { REGION_ARRAY } from '@application/constant';
import Loading from '@components/common/Loading';
import { useGetPlacesNearBy } from '@hooks/api/places';
import useGeoLocation from '@hooks/useGeoLocation';
import { setPlacesOfMap } from '@store/reducers/PlacesOfMapReducer';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';

import Marker from '@assets/marker.svg';
import MyLocation from '@assets/my-location.svg';
import useToast from '@hooks/useToast';
import Toast from '@components/common/Toast';

interface MapProps {
  currentAddress: string;
  userId: Record<string, string>;
}

const geoLocationOptions = {
  timeout: 6000,
};

/*
  - 현 위치 인식 지도 렌더링
  - 드롭다운으로 변경된 currentAddress에 따라 자치구청 기준으로 지도 렌더링
  - 지도를 움직일때마다 북동쪽-남서쪽 범위에 해당하는 장소 리스트 조회 가능
*/
const Map = ({ currentAddress, userId }: MapProps) => {
  const dispatch = useDispatch();
  const { toast, toastMsg, handleFloatingToast } = useToast();

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
  const { data, refetch } = useGetPlacesNearBy(
    {
      ws_latitude: wsLat,
      ws_longitude: wsLng,
      ne_latitude: neLat,
      ne_longitude: neLng,
    },
    userId,
  );

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
      window.kakao.maps.load(async () => {
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
          } else {
            setTimeout(() => {
              handleFloatingToast('지도 범위를 벗어났어요! 확대해주세요 :D');
            }, 1300);
          }

          window.kakao.maps.event.addListener(map, 'zoom_changed', function () {
            level = map.getLevel();
            if (level <= 4) {
              const zoomBounds = map.getBounds();
              handleChangeLatLng(zoomBounds);
            } else {
              setTimeout(() => {
                handleFloatingToast('지도 범위를 벗어났어요! 확대해주세요 :D');
              }, 1300);
            }
          });
        });

        const bounds = map.getBounds();
        handleChangeLatLng(bounds);

        return map;
      });
    }
  }, [location, currentAddress]);

  /*
    현재 지역 | 위도 경도가 변경될 시 refetch 실행
    새로운 데이터 값이 반환될 때까지 기다린 후 리듀서 함수 실행

    장소 데이터 마커 추가
  */
  const fetchData = useCallback(async () => {
    try {
      const { data } = await refetch();
      dispatch(setPlacesOfMap(data?.data.result));

      if (mapRef.current) {
        const places = data?.data.result || undefined;

        const markerImageInfo = {
          imageSrc: Marker,
          imageSize: new window.kakao.maps.Size(28, 40),
        };
        const markerImage = new window.kakao.maps.MarkerImage(
          markerImageInfo.imageSrc,
          markerImageInfo.imageSize,
          null,
        );

        if (Array.isArray(places) && places.length > 0) {
          // 위치 변경 시 마커가 초기화 될 수 있도록 코드 추가
          markers.map(existingMarker => existingMarker.setMap(null));

          const newMarkers = places.map(place => {
            const position = new window.kakao.maps.LatLng(place.latitude, place.longitude);
            const marker = new window.kakao.maps.Marker({ position, image: markerImage });

            // 장소 이름 - 인포윈도우로 띄우기
            window.kakao.maps.event.addListener(marker, 'click', function () {
              const placeOverlay = new window.kakao.maps.CustomOverlay({
                position: position,
                content: `
                  <div style="background-color: #fff; border: 1px solid #19bb35; 
                  padding: 5px 10px; border-radius: 10px; position: absolute; bottom: 34px; left: -34px;
                  z-index: 5; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    <a href='/place/${place.id}'><p style="font-size: 13px; font-weight: bold;">${place.name}🔗</p></a>
                  </div>
                `,
              });

              placeOverlay.setMap(mapRef.current);
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
  }, [currentAddress, LatLngRange]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (data?.data.result && Object.keys(data.data.result).length === 0) {
      setTimeout(() => {
        handleFloatingToast('추천 장소가 없어요! 다른 곳으로 이동해주세요 :D');
      }, 1200);
    }
  }, [data]);

  return location?.isLoading ? (
    <Loading />
  ) : (
    <>
      <MapWrap id="map" />
      {toast && <Toast>{toastMsg}</Toast>}
    </>
  );
};

const MapWrap = styled.div`
  width: 375px;
  height: 500px;
  margin: 0 auto;
`;

export default Map;
