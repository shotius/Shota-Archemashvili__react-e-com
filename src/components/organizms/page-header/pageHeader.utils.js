import productServices from '../../../services/productServices';
const { getCategoryNames, getCurrencies } = productServices;

const getCurrenciesAndCategories = async () => {
  try {
    const response = await Promise.all([getCategoryNames(), getCurrencies()]);
    return response;
  } catch (erro) {
    console.log('Could not get Categories and currencies');
    throw new Error('Could not get Categories and currencies');
  }
};

const pageHeaderUtils = {
  getCurrenciesAndCategories,
};

export default pageHeaderUtils;
