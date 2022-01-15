import { createSlice } from '@reduxjs/toolkit';

const initalState = {
  currency: 'USD', // "GBP", "AUD" , "JPY", "RUB"
  defaultCategory: 'clothes',
};

export const globalSlice = createSlice({
  name: 'globals',
  initialState: initalState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { setCurrency } = globalSlice.actions;

export default globalSlice.reducer;
