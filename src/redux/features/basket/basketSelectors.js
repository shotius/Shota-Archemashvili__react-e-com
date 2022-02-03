import { selectPrice } from '../../../utils/selectPrice';
import globalsSelectors from '../globalState/globalsSelectors';

/** FUnction returns total prict of products */
const getTotalPrice = (state) => {
  const products = getProducts(state);
  const currency = globalsSelectors.getCurrency(state);

  let totalPrice = products.length
    ? products.reduce(
        (acc, cur) => (acc += selectPrice(cur.prices, currency) * cur.count),
        0
      )
    : 0;

  return totalPrice;
};

/** Function returns total count of products */
const getTotalProducts = (state) => {
  const products = getProducts(state);

  const totalProducts = !!products.length
    ? products.reduce((total, product) => (total += product.count), 0)
    : 0;

  return totalProducts;
};

const getProducts = (state) => state.basket.products;

const basketSelectors = {
  getTotalPrice,
  getProducts,
  getTotalProducts,
};

export default basketSelectors;
