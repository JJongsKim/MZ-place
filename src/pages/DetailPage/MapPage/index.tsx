import { styled } from 'styled-components';

import Map from '@components/Map';
import BottomSheet from '@components/common/BottomSheet';
import DropDown from '@components/common/DropDown';
import ThumbnailList from '@components/common/ThumbnailList';
import { DetailPageWrap } from '../style';
import SearchBar from '@components/common/SearchBar';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface MapPageProps {
  userId: Record<string, string>;
}

const MapPage = ({ userId }: MapPageProps) => {
  const location = useLocation();
  const placesOfMap = useSelector((state: StoreType) => state.PlacesOfMapReducer.placesOfMap);
  const currentAddress = useSelector((state: StoreType) => state.LocationReducer.currentAddress);

  return (
    <DetailPageWrap>
      <SearchBar name={`${location.state.name}`} backIcon={true} searchIcon={true} />
      <MapPageWrap>
        <MapPageDropdownWrap>
          <DropDown currentAddress={currentAddress} />
        </MapPageDropdownWrap>
        <Map currentAddress={currentAddress} userId={userId} />
        <BottomSheet>
          <ThumbnailList places={placesOfMap} />
        </BottomSheet>
      </MapPageWrap>
    </DetailPageWrap>
  );
};

const MapPageWrap = styled.div`
  width: 375px;
`;

const MapPageDropdownWrap = styled.div`
  width: 375px;
  display: flex;
  justify-content: flex-start;
  padding: 0 25px;
  margin-bottom: 25px;
`;

export default MapPage;
