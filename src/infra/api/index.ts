import placesApi from './placesApi';
import authApi from './authApi';
import heartApi from './heartApi';
import reviewApi from './reviewApi';

export const api = {
  places: placesApi,
  auth: authApi,
  hearts: heartApi,
  reviews: reviewApi,
};
