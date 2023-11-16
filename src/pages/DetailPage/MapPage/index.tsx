import { styled } from 'styled-components';

import Map from '@components/Map';
import BottomSheet from '@components/common/BottomSheet';
import DropDown from '@components/common/DropDown';
import ThumbnailList from '@components/common/ThumbnailList';

interface MapPageProps {
  address: string;
}

const MapPage = ({ address }: MapPageProps) => {
  return (
    <MapPageWrap>
      <MapPageDropdownWrap>
        <DropDown currentAddress={address} />
      </MapPageDropdownWrap>
      <Map currentAddress={address} />
      <BottomSheet>
        <ThumbnailList />
      </BottomSheet>
    </MapPageWrap>
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
