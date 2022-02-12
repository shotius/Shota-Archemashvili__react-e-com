import { createSlice, current } from '@reduxjs/toolkit';
import basketServices from './basketServices';

const {
  removeItem,
  decreaseItemCount,
  findItem,
  encreaseItemCount,
  addItem,
  isLastItem,
  formatProductForBasket,
} = basketServices;

const initialState = {
  products: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItemToBasket: (state, action) => {
      const { count, ...item } = action.payload;
      const products = current(state.products);
      const product = formatProductForBasket(item);

      // If product already in the basket encrease the count
      const foundItem = findItem(products, product);

      // if there is an item alreade - encrease count, else add an item
      state.products = foundItem
        ? encreaseItemCount(products, product)
        : addItem(products, product);
    },

    removeItemFromBasket: (state, action) => {
      const { count, ...item } = action.payload;
      const products = current(state.products);
      // check if there is only one item in the basket
      const isLast = isLastItem(products, item);

      // if last one remains remove else, decrease
      state.products = isLast
        ? removeItem(products, item)
        : decreaseItemCount(products, item);
    },
  },
});

export const { addItemToBasket, removeItemFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
