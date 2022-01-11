import { createSlice } from '@reduxjs/toolkit';

const initalState = {
  currency: 'USD', // "GBP", "AUD" , "JPY", "RUB"
  category: 'tech',
};

export const globalSlice = createSlice({
  name: 'globals',
  initialState: initalState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCurrency, setCategory } = globalSlice.actions;

export default globalSlice.reducer;
