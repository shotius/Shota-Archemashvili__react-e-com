const getCurrency = (state) => state.globals.currency;

const getToasts = (state) => state.globals.toasts;

const getDefaultCategory = (state) => state.globals.defaultCategory;

const getCategories = (state) => state.globals.categories;

const getCurrencies = (state) => state.globals.currencies;

const globalsSelectors = {
  getCurrency,
  getToasts,
  getDefaultCategory,
  getCategories,
  getCurrencies,
};

export default globalsSelectors;
