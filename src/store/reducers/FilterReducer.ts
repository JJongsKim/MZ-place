import { createSlice } from '@reduxjs/toolkit';

interface RootState {
  costFilter: string[];
  activityFilter: number[];
  locationFilter: string[];
}

const initialState: RootState = {
  costFilter: [],
  activityFilter: [],
  locationFilter: [],
};

const FilterReducer = createSlice({
  name: 'FilterReducer',
  initialState,
  reducers: {
    setCostFilter: (state, action) => {
      state.costFilter = action.payload;
    },
    setActivityFilter: (state, action) => {
      state.activityFilter = action.payload;
    },
    setLocationFilter: (state, action) => {
      state.locationFilter = action.payload;
    },
  },
});

export const { setCostFilter, setActivityFilter, setLocationFilter } = FilterReducer.actions;

export default FilterReducer.reducer;
