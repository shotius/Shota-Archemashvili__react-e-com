import PropTypes from 'prop-types';
import { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { getCurrencyIcon } from '../../../../utils/getCurrencyIcon';
import { withParams } from '../../../../utils/HOC/withParams';
import AttributeButton from '../../../atoms/buttons/AttributeButton';
import { Button } from '../../../atoms/buttons/Button';
import ErrorText from '../../../atoms/typography/ErrorText';
import { Heading } from '../../../atoms/typography/Heading';
import TextMain from '../../../atoms/typography/TextMain';
import { styleClasses } from './styleClasses';

class ProductDetailDescription extends Component {
  constructor(props) {
    super(props);
    this.descriptionContainerRef = createRef();
    this.descriptionRef = createRef();
    this.state = {
      isDescriptionButtonShown: false,
      selectedAttributes: {},
      fieldErrors: {},
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

    // If attribute is in selected remove else add in the obj
    if (selectedObj[attributeName] !== value) {
      selectedObj[attributeName] = value;
    } else {
      delete selectedObj[attributeName];
    }

    this.setState({ selectedAttributes: selectedObj });
  };

  // handle adding to the basket
  handleAddToBasket = () => {
    // list all attrubute names
    // if there are not some attributes selected give an error
    const attributeNames = this.props.product.attributes.map((attr) => attr.id);
    const selectedAttributes = Object.keys(this.state.selectedAttributes);

    // go through all attributes and check if all of them are selected
    const fieldErrors = {};
    for (let attr of attributeNames) {
      if (!selectedAttributes.includes(attr)) {
        fieldErrors[attr] = `${attr} is not selected`;
      }
    }

    // set Error fields
    this.setState({ fieldErrors });

    // If error field was empty - submit
    if (!Object.keys(fieldErrors).length) {
      console.log('submit');
    }
  };

  render() {
    let price = 0;
    const { currency, product, toggleDescription } = this.props;
    const { fieldErrors } = this.state;

    // css classes
    const {
      productBrandClass,
      descriptionClass,
      productNameClass,
      descriptionExpandClass,
    } = styleClasses.call(this);

    if (!product) {
      return <div>fetching cars</div>;
    }

    // if product is fetched, select price
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
              {/* Attribute heading  */}
              <Heading className="pr-details__section-heading">
                {attr.name}:
              </Heading>
              {/* Attribute buttons */}
              <div className="pr-details__btn-group">
                {attr.items.map(({ value }) => (
                  <AttributeButton
                    key={value}
                    attr={attr}
                    value={value}
                    selectedAttributes={this.state.selectedAttributes}
                    onClick={() =>
                      this.handleSelectAttr({
                        attributeName: attr.id,
                        value,
                      })
                    }
                  >
                    {value}
                  </AttributeButton>
                ))}
              </div>
              <ErrorText>{fieldErrors[attr.id]}</ErrorText>
            </div>
          ))}

        {/* Price  */}
        <div className="pr-details__price">
          <Heading className="pr-details__section-heading -pb-10">
            price:
          </Heading>
          <TextMain className="text--bold">
            {getCurrencyIcon(currency)}
            {price}
          </TextMain>
        </div>

        {/* Add to basket  button  */}
        <Button className="btn--primary" onClick={this.handleAddToBasket}>
          add to card
        </Button>

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
