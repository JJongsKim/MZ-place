import SearchBar from '@components/common/SearchBar';
import { useLocation } from 'react-router-dom';

const DetailPage = () => {
  const location = useLocation();

  return (
    <>
      <SearchBar name={`${location.state}`} backIcon={true} searchIcon={true} />
    </>
  );
};

export default DetailPage;
