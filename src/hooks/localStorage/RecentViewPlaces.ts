const RecentViewPlaces = () => {
  const handleGetRecentPlaces = () => {
    const storedData = localStorage.getItem('recentPlaces');
    return storedData ? JSON.parse(storedData) : [];
  };

  const handleSaveRecentPlace = (places: PlacesType[]) => {
    localStorage.setItem('recentPlaces', JSON.stringify(places));
  };

  return { handleGetRecentPlaces, handleSaveRecentPlace };
};

export default RecentViewPlaces;
