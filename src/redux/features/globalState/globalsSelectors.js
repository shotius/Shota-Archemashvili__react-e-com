const getCurrency = (state) => state.globals.currency;

const getToasts = (state) => state.globals.toasts;

const getDefaultCategory = (state) => state.globals.defaultCategory;

const globalsSelectors = {
  getCurrency,
  getToasts,
  getDefaultCategory,
};

export default globalsSelectors;
