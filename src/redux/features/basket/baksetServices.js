import isEqual from 'lodash.isequal';

// increase count in the basket item
function encreaseItemCount(products, item) {
  return products.map((pr) => {
    const { count, ...rest } = pr;

    if (isEqual(rest, item)) {
      return { ...item, count: pr.count + 1 };
    }
    return pr;
  });
}

// Decrease count of the Item
function decreaseItemCount(products, item) {
  return products.map((pr) => {
    const { count, ...rest } = pr;

    if (isEqual(rest, item)) {
      return { ...item, count: pr.count - 1 };
    }
    return pr;
  });
}

// Remove item from bakset
function removeItem(products, item) {
  return products.filter((product) => {
    const { count, ...restProduct } = product;
    return !isEqual(restProduct, item);
  });
}

// Search product in the basket
function findItem(products, item) {
  return products.find((pr) => {
    const { count, ...rest } = pr;
    if (isEqual(rest, item)) {
      return pr;
    }
    return undefined;
  });
}

// Add new item to the products
function addItem(products, item) {
  return products.concat({ ...item, count: 1 });
}

// Checks if there is only one item in the basket
function isLastItem(products, item) {
  return findItem(products, item).count === 1;
}

/** Exports */

const basketServices = {
  findItem,
  encreaseItemCount,
  decreaseItemCount,
  removeItem,
  addItem,
  isLastItem,
};

export default basketServices;
