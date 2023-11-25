import { createSlice } from '@reduxjs/toolkit';

interface RootState {
  placesOfFilter: PlacesOfMap[];
}

const initialState: RootState = {
  placesOfFilter: [],
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
