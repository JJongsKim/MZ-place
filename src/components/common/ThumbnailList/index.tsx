import { ThumbnailListWrap } from './style';
import ThumbnailBox from '../ThumbnailBox';
import { useNavigate } from 'react-router-dom';
import RecentViewPlaces from '@hooks/localStorage/RecentViewPlaces';

interface ThumbnailListProps {
  places?: PlacesType[] | PlacesOfMap[];
  isLoading?: boolean;
}

const MAX_RECENT_PLACES = 20;

// TODO API 모두 입히면 수정하기
const ThumbnailList = ({ places }: ThumbnailListProps) => {
  const naviagate = useNavigate();
  const { handleGetRecentPlaces, handleSaveRecentPlace } = RecentViewPlaces();

  const handleClickThumb = (data: PlacesType) => {
    naviagate(`/place/${data.id}`, { state: data.name });

    const recentPlaces: PlacesType[] = handleGetRecentPlaces();
    const updatedRecentPlaces = recentPlaces.filter(place => place.id !== data.id);

    updatedRecentPlaces.push({
      id: data.id,
      image_url: data.image_url,
      name: data.name,
    });

    if (updatedRecentPlaces.length > MAX_RECENT_PLACES) {
      updatedRecentPlaces.shift();
    }

    handleSaveRecentPlace(updatedRecentPlaces);
  };

  return places && places.length !== 0 ? (
    <ThumbnailListWrap>
      {places.map(data => (
        <ThumbnailBox
          key={data.id}
          data={data}
          like={false}
          onClick={() => handleClickThumb(data)}
        />
      ))}
    </ThumbnailListWrap>
  ) : null;
};

export default ThumbnailList;
