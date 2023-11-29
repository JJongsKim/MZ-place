import { configureStore } from '@reduxjs/toolkit';

import LocationReducer from './reducers/LocationReducer';
import FilterReducer from './reducers/FilterReducer';
import PlacesOfFilterReducer from './reducers/PlacesOfFilterReducer';
import PlacesOfMapReducer from './reducers/PlacesOfMapReducer';
import UserIdReducer from './reducers/UserIdReducer';

export const store = configureStore({
  reducer: {
    LocationReducer: LocationReducer,
    FilterReducer: FilterReducer,
    PlacesOfFilterReducer: PlacesOfFilterReducer,
    PlacesOfMapReducer: PlacesOfMapReducer,
    UserIdReducer: UserIdReducer,
  },
});
