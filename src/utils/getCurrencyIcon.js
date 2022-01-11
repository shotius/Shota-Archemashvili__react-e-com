export const getCurrencyIcon = (currencyString) => {
  switch (currencyString) {
    case 'USD':
      return '$';
    case 'GBP':
      return '£';
    case 'JPY':
      return '¥';
    case 'RUB':
      return '₽';
    default:
      return '$';
  }
};
