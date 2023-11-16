import { configureStore } from '@reduxjs/toolkit';

import LocationReducer from './reducers/LocationReducer';
import PlacesReducer from './reducers/PlacesReducer';

export const store = configureStore({
  reducer: {
    LocationReducer: LocationReducer,
    PlacesReducer: PlacesReducer,
  },
});
