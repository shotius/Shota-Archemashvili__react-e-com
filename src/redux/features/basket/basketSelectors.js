import { selectPrice } from '../../../utils/selectPrice';

const getTotalPrice = (state) => {
  const { products } = state.basket;
  const { currency } = state.globals;

  let totalPrice = products.length
    ? products.reduce(
        (acc, cur) => (acc += selectPrice(cur.prices, currency) * cur.count),
        0
      )
    : 0;

  return totalPrice;
};

const getProducts = (state) => state.basket.products;

const basketSelectors = {
  getTotalPrice,
  getProducts,
};

export default basketSelectors;
