import { createSlice } from '@reduxjs/toolkit';

interface RootState {
  categoryRibbon: number[];
  categoryCost: string[];
  categoryRating: string[];
}

const initialState: RootState = {
  categoryRibbon: [],
  categoryCost: [],
  categoryRating: [],
};

const PlacesOfFilterReducer = createSlice({
  name: 'PlacesOfMapReducer',
  initialState,
  reducers: {
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

export const { setRibbonOfCategory, setCostOfCategory, setRatingOfCategory } =
  PlacesOfFilterReducer.actions;

export default PlacesOfFilterReducer.reducer;
