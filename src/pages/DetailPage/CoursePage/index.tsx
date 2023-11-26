import SearchBar from '@components/common/SearchBar';
import { DetailPageWrap } from '../style';
import { useLocation } from 'react-router-dom';
import WarningMention from '@components/common/warning';

const CoursePage = () => {
  const location = useLocation();

  return (
    <DetailPageWrap>
      <SearchBar name={`${location.state.name}`} backIcon={true} searchIcon={true} />
      <WarningMention text="미래유산코스 페이지는 아직 개발중이에요 :D" />
    </DetailPageWrap>
  );
};

export default CoursePage;
