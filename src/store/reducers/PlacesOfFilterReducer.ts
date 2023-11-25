import { createSlice } from '@reduxjs/toolkit';

interface RootState {
  placesOfFilter: PlacesOfMap[] | undefined;
}

const initialState: RootState = {
  placesOfFilter: undefined,
};

const PlacesOfFilterReducer = createSlice({
  name: 'PlacesOfMapReducer',
  initialState,
  reducers: {
    setPlacesOfFilter: (state, action) => {
      state.placesOfFilter = action.payload;
    },
  },
});

export const { setPlacesOfFilter } = PlacesOfFilterReducer.actions;

export default PlacesOfFilterReducer.reducer;
