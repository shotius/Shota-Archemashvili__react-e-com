import classNames from 'classnames';
import { Component } from 'react';
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
    this.state = { selectedImage: null, showDesc: false, product: null };
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
      this.setState({ product: cacheProduct });

      // get remaining info for the cache product
      const partialProduct = await productServices.getPartialProduct(id);

      // update ui
      this.setState({
        product: {
          ...this.state.product,
          ...partialProduct,
        },
        selectedImage: cacheProduct.gallery[0],
      });
    } else {
      // if product is not in the cache get whole product from the server
      const product = await productServices.getSinglProduct(id);
      this.setState({ product, selectedImage: product.gallery[0] });
    }
  };

  handleThumbClick(thumb) {
    this.setState({
      selectedImage: thumb,
    });
  }

  handleShowDescription = () => {
    this.setState({ showDesc: !this.state.showDesc });
  };

  render() {
    const { currency } = this.props;
    const { product, selectedImage } = this.state;
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
        'pr-details__description--hidden': this.state.showDesc,
      }
    );

    return (
      <PublicLayout>
        <ScrollToTop />
        <div className="product-page page-container--outer">
          <div className="product-page__container">
            <div className="product-page__slider">
              <div className="product-page__slider__thumbs">
                {thumbs.map((thumb, i) => (
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
                  <Heading className="heading--main -pb-12">
                    {product && product.brand}
                  </Heading>

                  <Heading className="heading--secondary">
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
                  <Heading className="pr-details__price">
                    {getCurrencyIcon(this.props.currency)}
                    {price}
                  </Heading>
                </div>
                <Button className="btn--primary">add to card</Button>
                <div className={descriptiongClass}>
                  {product && (
                    <div
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    />
                  )}
                </div>
                <Button
                  style={{
                    marginTop: '-32px',
                    display: this.state.showDesc && 'none',
                  }}
                  onClick={this.handleShowDescription}
                >
                  show more
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ visibility: this.state.showDesc ? 'visible' : 'hidden' }}>
          <Heading className="heading--secondary -pt-48">Description</Heading>
          {product && (
            <div
              className="text--regular"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          )}

          <Button onClick={this.handleShowDescription} className="-w-full">
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
