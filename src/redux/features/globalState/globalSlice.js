import { createSlice, current } from '@reduxjs/toolkit';
import globalsService from './globalsService';
const { formatToast, removeToastFrom, formatCategories, formatCurrencies } =
  globalsService;

const initalState = {
  currency: 'USD', // "GBP", "AUD" , "JPY", "RUB"
  defaultCategory: 'clothes',
  toasts: [],
  categories: [],
  currencies: [],
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
    setCategories: (state, action) => {
      state.categories = formatCategories(action.payload);
    },
    setCurrencies: (state, action) => {
      state.currencies = formatCurrencies(action.payload);
    },
  },
});

export const {
  setCurrency,
  setCategories,
  setCurrencies,
  setToast,
  removeToast,
} = globalSlice.actions;

export default globalSlice.reducer;
