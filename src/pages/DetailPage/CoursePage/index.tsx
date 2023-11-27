import SearchBar from '@components/common/SearchBar';
import { DetailPageWrap } from '../style';
import { useLocation } from 'react-router-dom';
import Loading from '@components/common/Loading';
import ThumbnailList from '@components/common/ThumbnailList';
import { useGetPlacesOfCourse } from '@hooks/api/places';

interface CoursePageProps {
  userId?: Record<string, string>;
}

const CoursePage = ({ userId }: CoursePageProps) => {
  const location = useLocation();

  const { data, isLoading, fetchNextPage, hasNextPage } = useGetPlacesOfCourse(userId);

  return (
    <DetailPageWrap>
      <SearchBar name={`${location.state.name}`} backIcon={true} searchIcon={true} />
      {isLoading ? (
        <Loading />
      ) : (
        <ThumbnailList
          places={data}
          isLoading={isLoading}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      )}
    </DetailPageWrap>
  );
};

export default CoursePage;
