import { styled } from 'styled-components';

import CustomFilter from '@components/CustomFilter';
import BottomSheet from '@components/common/BottomSheet';
import ThumbnailList from '@components/common/ThumbnailList';
import WarningMention from '@components/common/warning';
import { DetailPageWrap } from '../style';
import SearchBar from '@components/common/SearchBar';
import { useLocation } from 'react-router-dom';

// interface CustomFilterPlacesType {
//   places: PlacesType[];
// }

const CustomFilterPage = () => {
  const location = useLocation();
  const mock = [1, 2, 3];

  return (
    <DetailPageWrap>
      <SearchBar name={`${location.state.name}`} backIcon={true} searchIcon={true} />
      <CustomFilterPageWrap>
        {mock === undefined ? (
          <WarningMention text="필터를 선택해주세요!" />
        ) : (
          <ThumbnailList places={[]} />
        )}
        <BottomSheet>
          <CustomFilter />
        </BottomSheet>
      </CustomFilterPageWrap>
    </DetailPageWrap>
  );
};

const CustomFilterPageWrap = styled.div`
  width: 375px;
`;

export default CustomFilterPage;
