import { configureStore } from '@reduxjs/toolkit';

import LocationReducer from './reducers/LocationReducer';
import PlacesReducer from './reducers/PlacesReducer';
import CategoryReducer from './reducers/CategoryReducer';

export const store = configureStore({
  reducer: {
    LocationReducer: LocationReducer,
    PlacesReducer: PlacesReducer,
    CategoryReducer: CategoryReducer,
  },
});
