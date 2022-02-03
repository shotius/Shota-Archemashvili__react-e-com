import { Component } from 'react';
import ScrollToTop from '../components/molecules/ScrollToTop';
import { ProductPageDescriptionLeft } from '../components/organizms/product-detail/sections/ProductPageDescriptionLeft';
import ProductPageMoreDeatails from '../components/organizms/product-detail/sections/ProductPageMoreDeatails';
import ProductPageSlider from '../components/organizms/Sliders/ProductPageSlider';
import { PublicLayout } from '../components/templates/PublicLayout';
import productServices from '../services/productServices';
import { withParams } from '../utils/HOC/withParams';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      loadingProduct: false,
      descriptionExpanded: false,
      loadingPartialProduct: false,
    };
  }

  /** update product on mount: from cache or from the server */
  componentDidMount = async () => {
    const { productId: id, category } = this.props.params;

    // get product data from the apollo cache
    const cacheProduct = await productServices.getProductFromCache({
      category,
      id,
    });

    // if product is in apollo cache use it and add remaining data to it
    if (cacheProduct) {
      this.setState({ product: cacheProduct, loadingPartialProduct: true });

      // get remaining info for the cache product
      const partialProduct = await productServices.getPartialProduct(id);

      // update ui
      this.setState({
        product: {
          ...this.state.product,
          ...partialProduct,
        },
        loadingPartialProduct: false,
      });
    } else {
      // if product is not in the cache get whole product from the server
      this.setState({ loadingProduct: true });
      const [product, { loading }] = await productServices.getSinglProduct(id);

      this.setState({
        product,
        loadingProduct: loading,
      });
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
