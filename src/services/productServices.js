import GlobalApp from '../config';
import { PARTIAL_SINGLE_PRODUCT } from '../graphql/PARTIAL_SINGLE_PRODUCT';
import { SINGLE_PRODUCT } from '../graphql/SINGLE_PRODUCT';
import { SINGLE_CATEGORY } from '../graphql/SINGLE_CATEGORY';
import { ALL_CATEGORY_PRODUCTS } from '../graphql/ALL_CATEGORIES';

const client = GlobalApp.apolloClient;

/** Reading from the server  */

/**
 * @description Get product with all properties
 * @param {id} id
 * @returns {Product}
 */
const getSinglProduct = async (id) => {
  const response = await client.query({
    query: SINGLE_PRODUCT,
    variables: { id },
  });

  return [response.data.product, { loading: response.loading }];
};

/**
 * @description function returns single product with specific properties
 * @param {string} id
 * @returns {Product}
 */
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

/**
 * @description function returns all products in all categories
 * @returns {Product}
 */
const getAllCategoryProducts = async () => {
  return await client.query({
    query: ALL_CATEGORY_PRODUCTS,
  });
};

/**
 * @description function fetches single category with all products
 * @param {string} category
 * @returns Category
 */
const getSingleCategory = async (category) => {
  const res = await client.query({
    query: SINGLE_CATEGORY,
    variables: { category: { title: category } },
  });
  return res.data.category.products;
};

/** Reading from cache */

/**
 * @description get all products of a single category from the cache
 * @param {string} category
 * @returns {Product[]}
 */
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

/**
 * @description function returns single product from the cache
 * @param {string} id
 * @param {string} category
 * @returns {Product}
 */
const getProductFromCache = async ({ id, category }) => {
  try {
    const cachedProducts = await getCachedCategory(category);

    if (cachedProducts) {
      return cachedProducts.find((product) => product.id === id);
    } else {
      return null;
    }
  } catch (error) {
    throw new Error('Could not get product from the cache' + error);
  }
};

const productServices = {
  getAllCategoryProducts,
  getSingleCategory,
  getSinglProduct,
  getPartialProduct,
  getCachedCategory,
  getProductFromCache,
};

export default productServices;
