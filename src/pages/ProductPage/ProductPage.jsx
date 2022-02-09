import { Component } from 'react';
import HeadingSecondary from '../../components/atoms/typography/HeadingSecondary';
import ScrollToTop from '../../components/molecules/ScrollToTop';
import TextOnMiddleOfPage from '../../components/molecules/TextOnMiddleOfPage';
import { ProductPageDescriptionLeft } from '../../components/organizms/product-detail/sections/ProductPageDescriptionLeft';
import ProductPageSlider from '../../components/organizms/Sliders/ProductPageSlider/ProductPageSlider';
import { PublicLayout } from '../../components/templates/PublicLayout';
import { withParams } from '../../utils/HOC/withParams';
import productPageUtils from './productPage.utils';

const {
  getCachedProduct,
  getProductId,
  updateProductWithCache,
  updateProductWithPartialProduct,
  upateProductWithCachAndPartial,
  getProductCategory,
  fetchAndUpdateProduct,
  isProductMissing,
} = productPageUtils;

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      loadingProduct: false,
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
    this.isProductMissing = isProductMissing.bind(this);
  }

  /** update product on mount: from cache or from the server */
  componentDidMount = async () => {
    this.handleProductFetch();
  };

  componentDidUpdate = (prevProps) => {
    const prevLocation = prevProps.location.pathname;
    const location = this.props.location.pathname;

    if (prevLocation !== location) {
      this.handleProductFetch();
    }
  };

  handleProductFetch = async () => {
    const cachedProduct = await this.getCachedProduct();
    cachedProduct
      ? this.upateProductWithCachAndPartial(cachedProduct)
      : this.fetchAndUpdateProduct();
  };

  render() {
    const {
      product,
      loadingProduct,
      loadingPartialProduct,
    } = this.state;

    let thumbs = [];

    if (product) {
      thumbs = product.gallery;
    }

    if (this.isProductMissing()) {
      return (
        <PublicLayout>
          <TextOnMiddleOfPage>
            <HeadingSecondary>Product not found</HeadingSecondary>
          </TextOnMiddleOfPage>
        </PublicLayout>
      );
    }

    return (
      <PublicLayout>
        <ScrollToTop />
        <div className="product-page__container">
          <ProductPageSlider thumbs={thumbs} />
          <div className="product-page__pr-details pr-details">
            <ProductPageDescriptionLeft
              loadingPartialProduct={loadingPartialProduct}
              loadingProduct={loadingProduct}
              product={product}
            />
          </div>
        </div>
      </PublicLayout>
    );
  }
}

export default withParams(ProductPage);
