import { createSlice } from '@reduxjs/toolkit';

interface RootState {
  placesOfMap: PlacesOfMap[];
}

const initialState: RootState = {
  placesOfMap: [],
};

const PlacesOfMapReducer = createSlice({
  name: 'PlacesOfMapReducer',
  initialState,
  reducers: {
    setPlacesOfMap: (state, action) => {
      state.placesOfMap = action.payload;
    },
  },
});

export const { setPlacesOfMap } = PlacesOfMapReducer.actions;

export default PlacesOfMapReducer.reducer;
