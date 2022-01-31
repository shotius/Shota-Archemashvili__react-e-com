import { createSlice, current } from '@reduxjs/toolkit';
import globalsService from './globalsService';
const { formatToast, removeToastFrom } = globalsService;

const initalState = {
  currency: 'USD', // "GBP", "AUD" , "JPY", "RUB"
  defaultCategory: 'clothes',
  toasts: [],
};

export const globalSlice = createSlice({
  name: 'globals',
  initialState: initalState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setToast: (state, action) => {
      // add necessary fields to raw tast object
      const toast = formatToast(action.payload); 
      state.toasts.push(toast);
    },
    removeToast: (state, action) => {
      const id = action.payload;
      const toasts = current(state.toasts);
      state.toasts = removeToastFrom(toasts, id);
    },
  },
});

export const { setCurrency, setToast, removeToast } = globalSlice.actions;

export default globalSlice.reducer;
