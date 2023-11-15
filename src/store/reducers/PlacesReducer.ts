import { createSlice } from '@reduxjs/toolkit';

// 카테고리별 장소 조회 | 맞춤 필터 장소 조회에서 사용할 리듀서
interface RootState {
  placeResult: PlacesType[];
}

const initialState: RootState = {
  placeResult: [],
};

const PlacesReducer = createSlice({
  name: 'PlacesReducer',
  initialState,
  reducers: {
    setPlacesResult: (state, action) => {
      state.placeResult = [...action.payload];
    },
  },
});

export const { setPlacesResult } = PlacesReducer.actions;

export default PlacesReducer.reducer;
