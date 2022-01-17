import classNames from 'classnames';
import { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { Button } from '../components/atoms/buttons/Button';
import { Heading } from '../components/atoms/Heading';
import { AspectRatio } from '../components/molecules/AspectRatio';
import ScrollToTop from '../components/molecules/ScrollToTop';
import { PublicLayout } from '../components/templates/PublicLayout';
import productServices from '../services/productServices';
import { getCurrencyIcon } from '../utils/getCurrencyIcon';
import { withParams } from '../utils/HOC/withParams';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.descriptionContainerRef = createRef();
    this.descriptionRef = createRef(0);
    this.state = {
      selectedImage: null,
      descriptionVisible: false,
      product: null,
      loading: false,
      loadingProduct: false,
      laodingPartialProduct: false,
      isDescriptionButtonShown: false,
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
        selectedImage: cacheProduct.gallery[0],
        loadingPartialProduct: false,
      });
    } else {
      // if product is not in the cache get whole product from the server
      this.setState({ loadingProduct: true });
      const [product, { loading }] = await productServices.getSinglProduct(id);

      this.setState({
        product,
        selectedImage: product.gallery[0],
        loadingProduct: loading,
      });
    }
  };

  componentDidUpdate() {
    // show descripiton "more" button
    if (
      !this.state.isDescriptionButtonShown &&
      this.shouldDescriptionButtonBeVisible()
    ) {
      this.setState({ isDescriptionButtonShown: true });
    }
  }

  // returns true if product is fetched and product description is enough to fill the container
  shouldDescriptionButtonBeVisible = () => {
    return (
      this.state.product &&
      this.descriptionContainerRef.current &&
      this.descriptionRef.current &&
      this.descriptionContainerRef.current.clientHeight <=
        this.descriptionRef.current.clientHeight
    );
  };

  handleThumbClick(thumb) {
    this.setState({
      selectedImage: thumb,
    });
  }

  handleToggleDescription = () => {
    this.setState({ descriptionVisible: !this.state.descriptionVisible });
  };

  render() {
    const { currency } = this.props;
    const { product, selectedImage, loadingProduct, loadingPartialProduct } =
      this.state;
    let price = 0;
    let thumbs = [];

    // if product is fetched update some data
    if (product) {
      price = product.prices.find(
        (price) => price.currency === currency
      ).amount;
      thumbs = product.gallery;
    }

    const descriptiongClass = classNames(
      'pr-details__description',
      'text--regular',
      {
        'pr-details__description--hidden': this.state.descriptionVisible,
      }
    );

    const productNameClass = classNames('heading--secondary', {
      'skeleton skeleton--header': loadingProduct,
    });

    const productBrandClass = classNames('heading--main -pb-12', {
      'skeleton skeleton--header': loadingPartialProduct || loadingProduct,
    });

    console.log('should', this.shouldDescriptionButtonBeVisible());
    console.log('visible: ', this.state.descriptionVisible);

    return (
      <PublicLayout>
        <ScrollToTop />
        <div className="product-page page-container--outer">
          <div className="product-page__container">
            <div className="product-page__slider">
              <div className="product-page__slider__thumbs">
                {thumbs.slice(0, 5).map((thumb, i) => (
                  <AspectRatio
                    ratio={1}
                    maxWidth="80px"
                    key={`${thumb}${i}`}
                    onClick={() => this.handleThumbClick(thumb)}
                  >
                    <img src={thumb} alt="slider thumb" />
                  </AspectRatio>
                ))}
              </div>
              <div className="product-page__slider__img">
                {selectedImage && (
                  <img
                    src={this.state.selectedImage}
                    alt="slider main"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                )}
              </div>
            </div>
            <div className="product-page__pr-details pr-details">
              <div className="pr-details__container">
                <div className="pr-details__headings">
                  <Heading className={productBrandClass}>
                    {product && product.brand}
                  </Heading>

                  <Heading className={productNameClass}>
                    {product && product.name}
                  </Heading>
                </div>
                <div className="pr-details__sizes">
                  <Heading className="pr-details__section-heading">
                    Sizes:{' '}
                  </Heading>
                  <div className="pr-details__btn-group">
                    {/* <Button className="btn--outline btn--outline--selected">
                      xs
                    </Button>
                    <Button className="btn--outline">s</Button>
                    <Button className="btn--outline">m</Button>
                    <Button className="btn--outline">L</Button> */}
                    needs to fetch
                  </div>
                </div>
                <div className="pr-details__price">
                  <Heading className="pr-details__section-heading -pb-10">
                    price:
                  </Heading>
                  <Heading className={`pr-details__price `}>
                    {getCurrencyIcon(this.props.currency)}
                    {price}
                  </Heading>
                </div>
                <Button className="btn--primary">add to card</Button>
                <div
                  className={descriptiongClass}
                  ref={this.descriptionContainerRef}
                >
                  {product && (
                    <div
                      ref={this.descriptionRef}
                      // dangerouslySetInnerHTML={{ __html: product.description }}
                    >lorem lorem lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem</div>
                  )}
                </div>
                <Button
                  style={{
                    marginTop: '-32px',
                    display:
                      this.shouldDescriptionButtonBeVisible() &&
                      !this.state.descriptionVisible
                        ? ''
                        : 'none',
                  }}
                  onClick={this.handleToggleDescription}
                >
                  show more details
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            visibility: this.state.descriptionVisible ? 'visible' : 'hidden',
          }}
        >
          <Heading className="heading--secondary -pt-48">Description</Heading>
          {product && (
            <div
              className="text--regular"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          )}

          <Button onClick={this.handleToggleDescription} className="-w-full">
            show less
          </Button>
        </div>
      </PublicLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.globals.currency,
});

const withRedux = connect(mapStateToProps);

export default withRedux(withParams(ProductPage));
