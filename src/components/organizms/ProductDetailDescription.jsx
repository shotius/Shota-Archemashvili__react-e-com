import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Heading } from '../atoms/Heading';
import { Button } from '../atoms/buttons/Button';
import { getCurrencyIcon } from '../../utils/getCurrencyIcon';
import { withParams } from '../../utils/HOC/withParams';
import { connect } from 'react-redux';

class ProductDetailDescription extends Component {
  constructor(props) {
    super(props);
    this.descriptionContainerRef = createRef();
    this.descriptionRef = createRef();
    this.state = {
      isDescriptionButtonShown: false,
    };
  }

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
      this.props.product &&
      this.descriptionContainerRef.current &&
      this.descriptionRef.current &&
      this.descriptionContainerRef.current.clientHeight <=
        this.descriptionRef.current.clientHeight
    );
  };

  render() {
    let price = 0;
    const { currency } = this.props;

    const {
      loadingProduct,
      loadingPartialProduct,
      product,
      descriptionExpanded,
      toggleDescription,
    } = this.props;

    // if product is fetched update some data
    if (product) {
      price = product.prices.find(
        (price) => price.currency === currency
      ).amount;
    }

    const productBrandClass = classNames('heading--main -pb-12', {
      'skeleton skeleton--header': loadingPartialProduct || loadingProduct,
    });

    const descriptiongClass = classNames(
      'pr-details__description',
      'text--regular',
      {
        'pr-details__description--hidden': descriptionExpanded,
      }
    );

    const productNameClass = classNames('heading--secondary', {
      'skeleton skeleton--header': loadingProduct,
    });

    const descriptionExpandClass = classNames(
      'pr-details__description__btn--open-description',
      {
        'pr-details__description__btn--open-description--hidden': !(
          this.shouldDescriptionButtonBeVisible() && !descriptionExpanded
        ),
      }
    );

    return (
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
          <Heading className="pr-details__section-heading">Sizes: </Heading>
          <div className="pr-details__btn-group">
            <Button className="btn--outline btn--outline--selected">xs</Button>
            <Button className="btn--outline">s</Button>
            <Button className="btn--outline btn--disabled">m</Button>
            <Button className="btn--outline">L</Button>
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
        <div className={descriptiongClass} ref={this.descriptionContainerRef}>
          {product && (
            <div
              ref={this.descriptionRef}
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          )}
        </div>
        <Button className={descriptionExpandClass} onClick={toggleDescription}>
          show more details
        </Button>
      </div>
    );
  }
}

ProductDetailDescription.propTypes = {
  loadingPartialProduct: PropTypes.bool.isRequired,
  loadingProduct: PropTypes.bool.isRequired,
  product: PropTypes.any,
  descriptionExpanded: PropTypes.bool.isRequired,
  toggleDescription: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currency: state.globals.currency,
});

const withRedux = connect(mapStateToProps);

export default withRedux(withParams(ProductDetailDescription));
