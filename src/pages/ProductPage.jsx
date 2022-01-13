import { Component } from 'react';
import { AspectRatio } from '../components/molecules/AspectRatio';
import { PublicLayout } from '../components/templates/PublicLayout';
import { Heading } from '../components/atoms/Heading';
import { Button } from '../components/atoms/buttons/Button';
import classNames from 'classnames';
import { connect } from 'react-redux';
import ScrollToTop from '../components/molecules/ScrollToTop';
import { getCurrencyIcon } from '../utils/getCurrencyIcon';
import { withApollo } from '@apollo/client/react/hoc';
import { SINGLE_PRODUCT } from '../graphql/SINGLE_PRODUCT';
import { PARTIAL_SINGLE_PRODUCT } from '../graphql/PARTIAL_SINGLE_PRODUCT';
import { SINGLE_CATEGORY } from '../graphql/SINGLE_CATEGORY';
import { withParams } from '../utils/HOC/withParams';

// const thumbs = [
//   'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087',
//   'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg',
//   'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg',
//   'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087',
//   'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg',
// ];

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedImage: null, showDesc: false, product: null };
    this.handleShowDescription = this.handleShowDescription.bind(this);
  }

  componentDidMount = async () => {
    const id = this.props.params.productId;
    const { client } = this.props;

    // get product data from the apollo cache
    const cacheResponse = await client.readQuery({
      query: SINGLE_CATEGORY,
      variables: { category: { title: 'tech' } },
    });
    // if there is data in apollo cache get it and add partial data
    if (cacheResponse) {
      const cacheProduct = cacheResponse.category.products.find(
        (product) => product.id === id
      );
      this.setState({ product: cacheProduct });

      // get remaining info for the cache product
      const partialProduct = await client.query({
        query: PARTIAL_SINGLE_PRODUCT,
        variables: { id },
      });

      // success
      if (partialProduct.data) {
        const product = partialProduct.data.product;
        this.setState({
          product: {
            ...this.state.product,
            ...product,
          },
          selectedImage: cacheProduct.gallery[0],
        });
      }
    } else {
      // if product is not in the cache get whole product from the server
      const productInfo = await client.query({
        query: SINGLE_PRODUCT,
        variables: { id },
      });

      if (productInfo.data) {
        const product = productInfo.data.product;
        this.setState({ product, selectedImage: product.gallery[0] });
      }
    }
  };

  handleThumbClick(thumb) {
    this.setState({
      selectedImage: thumb,
    });
  }

  handleShowDescription() {
    this.setState({ showDesc: !this.state.showDesc });
  }

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
                  {product && product.name}
                  <Heading className="heading--secondary"></Heading>
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

ProductPage.propTypes = {
  // product: PropTypes.shape({
  //   id: PropTypes.string,
  //   name: PropTypes.string,
  //   inStock: PropTypes.bool,
  //   gallery: PropTypes.arrayOf(PropTypes.string),
  //   // description: PropTypes.string,
  //   // brand: PropTypes.string,
  //   prices: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       currency: PropTypes.string,
  //       amount: PropTypes.number,
  //     })
  //   ),
  // attributes: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string,
  //     name: PropTypes.string,
  //     type: PropTypes.string,
  //     items: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         displayValue: PropTypes.string,
  //         value: PropTypes.string,
  //         id: PropTypes.string,
  //       })
  //     ),
  //   })
  // ),
  // }).isRequired,
};

const mapStateToProps = (state) => ({
  currency: state.globals.currency,
});

const withRedux = connect(mapStateToProps);

export default withApollo(withRedux(withParams(ProductPage)));
