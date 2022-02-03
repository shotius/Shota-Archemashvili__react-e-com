import productServices from '../../services/productServices';
const { getPartialProduct, getProductFromCache } = productServices;

async function getCachedProduct() {
  const id = this.getProductId();
  const category = this.getProductCategory();

  return await getProductFromCache({
    category,
    id,
  });
}

function getProductId() {
  return this.props.params.productId;
}

function getProductCategory() {
  return this.props.params.category;
}

function updateProductWithCache(cachedProduct) {
  this.setState({ product: cachedProduct, loadingPartialProduct: true });
}

function updateProductWithPartialProduct(partialProduct) {
  // update ui
  this.setState({
    product: {
      ...this.state.product,
      ...partialProduct,
    },
    loadingPartialProduct: false,
  });
}

async function upateProductWithCachAndPartial(cachedProduct) {
  const id = this.getProductId();
  this.updateProductWithCache(cachedProduct);
  const partialProduct = await getPartialProduct(id);
  this.updateProductWithPartialProduct(partialProduct);
}

async function fetchAndUpdateProduct() {
  const id = this.getProductId();

  this.setState({ loadingProduct: true });
  const [product, { loading }] = await productServices.getSinglProduct(id);

  this.setState({
    product,
    loadingProduct: loading,
  });
}

const productPageUtils = {
  getCachedProduct,
  getProductId,
  getProductCategory,
  updateProductWithCache,
  updateProductWithPartialProduct,
  upateProductWithCachAndPartial,
  fetchAndUpdateProduct,
};

export default productPageUtils;
