import { createSlice } from '@reduxjs/toolkit';

interface RootState {
  currentAddress: string;
}

const initialState: RootState = {
  currentAddress: '현 위치',
};

const LocationSlice = createSlice({
  name: 'LocationSlice',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.currentAddress = action.payload;
    },
  },
});

export const { setLocation } = LocationSlice.actions;

export default LocationSlice.reducer;
