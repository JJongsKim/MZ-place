import { configureStore } from '@reduxjs/toolkit';

import LocationReducer from './reducers/LocationReducer';

export const store = configureStore({
  reducer: {
    LocationReducer: LocationReducer,
  },
});
