import { createSlice } from '@reduxjs/toolkit';

interface RootState {
  categoryId: number;
  categoryRibbon: number[];
  categoryCost: string[];
  categoryRating: string[];
}

const initialState: RootState = {
  categoryId: 0,
  categoryRibbon: [],
  categoryCost: [],
  categoryRating: [],
};

const PlacesOfFilterReducer = createSlice({
  name: 'PlacesOfMapReducer',
  initialState,
  reducers: {
    setIdOfCategory: (state, action) => {
      state.categoryId = action.payload;
    },

    // 블루리본 개수
    setRibbonOfCategory: (state, action) => {
      state.categoryRibbon = action.payload;
    },

    // 무료/유료
    setCostOfCategory: (state, action) => {
      state.categoryCost = action.payload;
    },

    // 별점 높은순/낮은순
    setRatingOfCategory: (state, action) => {
      state.categoryRating = action.payload;
    },
  },
});

export const { setIdOfCategory, setRibbonOfCategory, setCostOfCategory, setRatingOfCategory } =
  PlacesOfFilterReducer.actions;

export default PlacesOfFilterReducer.reducer;
