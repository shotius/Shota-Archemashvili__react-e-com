import GlobalApp from '../config';
import { PARTIAL_SINGLE_PRODUCT } from '../graphql/PARTIAL_SINGLE_PRODUCT';
import { SINGLE_PRODUCT } from '../graphql/SINGLE_PRODUCT';
import { SINGLE_CATEGORY } from '../graphql/SINGLE_CATEGORY';

const client = GlobalApp.apolloClient;

// Get product with all
const getSinglProduct = async (id) => {
  const response = await client.query({
    query: SINGLE_PRODUCT,
    variables: { id },
  });

  if (response.data) {
    return response.data.product;
  } else {
    throw new Error('could not fetch the product');
  }
};

// Get product
const getPartialProduct = async (id) => {
  const response = await client.query({
    query: PARTIAL_SINGLE_PRODUCT,
    variables: { id },
  });

  if (response.data) {
    return response.data.product;
  } else {
    throw new Error('could not fetch the product');
  }
};

const getSingleCategory = async (category) => {
  return await client.query({
    query: SINGLE_CATEGORY,
    variables: { category: { title: category } },
  });
};

// ** Reading from cache

// get all products from the cache
const getCachedCategory = async (category) => {
  const response = await client.readQuery({
    query: SINGLE_CATEGORY,
    variables: { category: { title: category } },
  });

  if (response) {
    return response.category.products;
  } else {
    return null;
  }
};

const getProductFromCache = async ({id, category}) => {
  try {
    const products = await getCachedCategory(category);
    
    if (products) {
      return products.find((product) => product.id === id);
    } else {
      return null;
    }
  } catch (error) {
    throw new Error('Could not get product from the cache' + error);
  }
};

const productServices = {
  getSinglProduct,
  getPartialProduct,
  getCachedCategory,
  getProductFromCache,
};

export default productServices;
