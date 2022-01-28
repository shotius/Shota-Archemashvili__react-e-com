import { configureStore } from '@reduxjs/toolkit';
import globalSlice from '../features/globalState/globalSlice';
import basketSlice from '../features/basket/basketSlice';

export default configureStore({
  reducer: {
    globals: globalSlice,
    basket: basketSlice,
  },
});
