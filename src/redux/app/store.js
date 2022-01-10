import { configureStore } from '@reduxjs/toolkit';
import globalSlice from '../features/globalState/globalSlice';

export default configureStore({
  reducer: {
    globals: globalSlice,
  },
});
