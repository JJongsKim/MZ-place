import { createSlice } from '@reduxjs/toolkit';

interface RootState {
  userId: Record<string, string>;
}

const initialState: RootState = {
  userId: {},
};

const UserIdReducer = createSlice({
  name: 'UserIdReducer',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setUserId } = UserIdReducer.actions;

export default UserIdReducer.reducer;
