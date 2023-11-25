import { configureStore } from '@reduxjs/toolkit';

import LocationReducer from './reducers/LocationReducer';
import PlacesOfMapReducer from './reducers/PlacesOfMapReducer';
import UserIdReducer from './reducers/UserIdReducer';

export const store = configureStore({
  reducer: {
    LocationReducer: LocationReducer,
    PlacesOfMapReducer: PlacesOfMapReducer,
    UserIdReducer: UserIdReducer,
  },
});
