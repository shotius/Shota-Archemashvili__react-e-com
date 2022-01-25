import PropTypes from 'prop-types';
import { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { getCurrencyIcon } from '../../../../utils/getCurrencyIcon';
import { withParams } from '../../../../utils/HOC/withParams';
import { Button } from '../../../atoms/buttons/Button';
import { Heading } from '../../../atoms/Heading';
import { styleClasses } from './styleClasses';

class ProductDetailDescription extends Component {
  constructor(props) {
    super(props);
    this.descriptionContainerRef = createRef();
    this.descriptionRef = createRef();
    this.state = {
      isDescriptionButtonShown: false,
      selectedAttributes: {},
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

  // handles attribute button click
  handleSelectAttr = ({ attributeName, value }) => {
    const selectedObj = { ...this.state.selectedAttributes };

    if (selectedObj[attributeName] !== value) {
      selectedObj[attributeName] = value;
    } else {
      delete selectedObj[attributeName];
    }

    this.setState({ selectedAttributes: selectedObj });
  };

  render() {
    let price = 0;
    const { currency, product, toggleDescription } = this.props;

    // css classes
    const {
      productBrandClass,
      descriptionClass,
      productNameClass,
      descriptionExpandClass,
      sizeButtonClass,
    } = styleClasses.call(this);

    if (!product) {
      return <div>fetching cars</div>;
    }

    // if product is fetched update choose price
    price = product.prices.find((price) => price.currency === currency).amount;

    return (
      <div className="pr-details__container">
        {/* Heading  */}
        <div className="pr-details__headings">
          <Heading className={productBrandClass}>{product.brand}</Heading>
          <Heading className={productNameClass}>{product.name}</Heading>
        </div>

        {/* Attributes  */}
        {product.attributes &&
          product.attributes.map((attr) => (
            <div className="pr-details__sizes" key={attr.id}>
              <Heading className="pr-details__section-heading">
                {attr.name}:
              </Heading>
              <div className="pr-details__btn-group">
                {/* Attribute buttons */}
                {attr.items.map(({ value }, i) => (
                  <Button
                    key={i}
                    onClick={() =>
                      this.handleSelectAttr({ attributeName: attr.id, value })
                    }
                    className={sizeButtonClass({ attributeName: attr.id, value })}
                  >
                    {value}
                  </Button>
                ))}
              </div>
            </div>
          ))}

        {/* Price  */}
        <div className="pr-details__price">
          <Heading className="pr-details__section-heading -pb-10">
            price:
          </Heading>
          <Heading className={`pr-details__price `}>
            {getCurrencyIcon(currency)}
            {price}
          </Heading>
        </div>

        {/* Add to basket  button  */}
        <Button className="btn--primary">add to card</Button>

        {/* Description  */}
        <div className={descriptionClass} ref={this.descriptionContainerRef}>
          <div
            ref={this.descriptionRef}
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
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
