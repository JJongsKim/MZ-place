import { styled } from 'styled-components';

import CustomFilter from '@components/CustomFilter';
import BottomSheet from '@components/common/BottomSheet';
import ThumbnailList from '@components/common/ThumbnailList';
import WarningMention from '@components/common/warning';

interface CustomFilterPlacesType {
  places: PlacesType[];
}

const CustomFilterPage = ({ places }: CustomFilterPlacesType) => {
  return (
    <CustomFilterPageWrap>
      {places === undefined ? (
        <WarningMention text="필터를 선택해주세요!" />
      ) : (
        <ThumbnailList places={places} />
      )}
      <BottomSheet>
        <CustomFilter />
      </BottomSheet>
    </CustomFilterPageWrap>
  );
};

const CustomFilterPageWrap = styled.div`
  width: 375px;
`;

export default CustomFilterPage;
