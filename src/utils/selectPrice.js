/**
 * Function returns appropriate price from the list of currencies
 * @param {[{currency: String, amount: Number}]} prices
 * @param {String} currency
 * @returns {Number} amount
 */
export const selectPrice = (prices, currency) =>
  prices.find((price) => price.currency === currency).amount;
