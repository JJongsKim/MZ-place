import { createSlice } from '@reduxjs/toolkit';

interface RootState {
  costFilter: string[];
  activityFilter: number[];
  locationFilter: string[];
  submitFilter: boolean;
}

const initialState: RootState = {
  costFilter: [],
  activityFilter: [],
  locationFilter: [],
  submitFilter: false,
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
    setSubmitFilter: (state, action) => {
      state.submitFilter = action.payload;
    },
  },
});

export const { setCostFilter, setActivityFilter, setLocationFilter, setSubmitFilter } =
  FilterReducer.actions;

export default FilterReducer.reducer;
