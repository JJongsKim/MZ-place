import { styled } from 'styled-components';

import Map from '@components/Map';
import BottomSheet from '@components/common/BottomSheet';
import DropDown from '@components/common/DropDown';
import ThumbnailList from '@components/common/ThumbnailList';
import { DetailPageWrap } from '../style';
import SearchBar from '@components/common/SearchBar';
import { useLocation } from 'react-router-dom';

const MapPage = () => {
  const location = useLocation();

  return (
    <DetailPageWrap>
      <SearchBar name={`${location.state.name}`} backIcon={true} searchIcon={true} />
      <MapPageWrap>
        <MapPageDropdownWrap>
          <DropDown currentAddress={'현 위치'} />
        </MapPageDropdownWrap>
        <Map currentAddress={'현 위치'} />
        <BottomSheet>
          <ThumbnailList />
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
