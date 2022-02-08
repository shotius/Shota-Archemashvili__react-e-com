import { Component } from 'react';
import ScrollToTop from '../../components/molecules/ScrollToTop';
import { ProductPageDescriptionLeft } from '../../components/organizms/product-detail/sections/ProductPageDescriptionLeft';
import ProductPageMoreDeatails from '../../components/organizms/product-detail/sections/ProductPageMoreDeatails';
import ProductPageSlider from '../../components/organizms/Sliders/ProductPageSlider/ProductPageSlider';
import { PublicLayout } from '../../components/templates/PublicLayout';
import { withParams } from '../../utils/HOC/withParams';
import productPageUtils from './utils';

const {
  getCachedProduct,
  getProductId,
  updateProductWithCache,
  updateProductWithPartialProduct,
  upateProductWithCachAndPartial,
  getProductCategory,
  fetchAndUpdateProduct,
} = productPageUtils;

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      loadingProduct: false,
      descriptionExpanded: false,
      loadingPartialProduct: false,
    };
    this.getCachedProduct = getCachedProduct.bind(this);
    this.getProductId = getProductId.bind(this);
    this.updateProductWithCache = updateProductWithCache.bind(this);
    this.updateProductWithPartialProduct =
      updateProductWithPartialProduct.bind(this);
    this.getProductCategory = getProductCategory.bind(this);
    this.upateProductWithCachAndPartial =
      upateProductWithCachAndPartial.bind(this);
    this.fetchAndUpdateProduct = fetchAndUpdateProduct.bind(this);
  }

  /** update product on mount: from cache or from the server */
  componentDidMount = async () => {
    const cachedProduct = await this.getCachedProduct();
    cachedProduct
      ? this.upateProductWithCachAndPartial(cachedProduct)
      : this.fetchAndUpdateProduct();
  };

  componentDidUpdate = (prevProps) => {
    const prevLocation = prevProps.location.pathname;
    const location = this.props.location.pathname;

    if (prevLocation !== location) {
      this.fetchAndUpdateProduct();
    }
  };

  handleToggleDescription = () => {
    this.setState({ descriptionExpanded: !this.state.descriptionExpanded });
  };

  render() {
    const {
      product,
      loadingProduct,
      loadingPartialProduct,
      descriptionExpanded,
    } = this.state;

    let thumbs = [];

    
    if (product) {
      thumbs = product.gallery;
    }

    return (
      <PublicLayout>
        <ScrollToTop />
        <div className="product-page page-container--outer">
          <div className="product-page__container">
            <ProductPageSlider thumbs={thumbs} />
            <div className="product-page__pr-details pr-details">
              <ProductPageDescriptionLeft
                descriptionExpanded={this.state.descriptionExpanded}
                loadingPartialProduct={loadingPartialProduct}
                loadingProduct={loadingProduct}
                product={product}
                toggleDescription={this.handleToggleDescription}
              />
            </div>
          </div>
        </div>
        <ProductPageMoreDeatails
          product={product}
          descriptionVisible={descriptionExpanded}
          toggleDescription={this.handleToggleDescription}
        />
      </PublicLayout>
    );
  }
}

export default withParams(ProductPage);
