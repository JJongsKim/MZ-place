import { createSlice } from '@reduxjs/toolkit';

interface RootState {
  categoryPlaces: PlacesType[] | null;
}

const initialState: RootState = {
  categoryPlaces: [],
};

// 1 ~ 8 카테고리에 대한 장소를 담을 리듀서
const CategoryReducer = createSlice({
  name: 'CategoryReducer',
  initialState,
  reducers: {
    setPlacesCategory: (state, action) => {
      state.categoryPlaces = action.payload;
    },
  },
});

export const { setPlacesCategory } = CategoryReducer.actions;

export default CategoryReducer.reducer;
