import PropTypes from 'prop-types';
import { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import basketSelectors from '../../../../../redux/features/basket/basketSelectors';
import { addItemToBasket } from '../../../../../redux/features/basket/basketSlice';
import { setToast } from '../../../../../redux/features/globalState/globalSlice';
import globalsSelectors from '../../../../../redux/features/globalState/globalsSelectors';
import { isObjectEmpty } from '../../../../../utils/helpers';
import { withParams } from '../../../../../utils/HOC/withParams';
import { selectPrice } from '../../../../../utils/selectPrice';
import AttributeButton from '../../../../atoms/buttons/AttributeButton';
import { Button } from '../../../../atoms/buttons/Button';
import ErrorText from '../../../../atoms/typography/ErrorText';
import { Heading } from '../../../../atoms/typography/Heading';
import TextMain from '../../../../atoms/typography/TextMain';
import PriceWithIcon from '../../../../molecules/PriceWithIcon';
import { styleClasses } from './styleClasses';
import productPageDeatailLeftUtils from './utils';

const {
  shouldShowMoreButtonBeVisible,
  shouldDescriptionButtonBeVisible,
  getSelectedAttributes,
  getUpdatedAttibutes,
  validateAttributes,
} = productPageDeatailLeftUtils;

class ProductPageDescriptionLeft extends Component {
  constructor(props) {
    super(props);
    this.descriptionContainerRef = createRef();
    this.descriptionRef = createRef();
    this.state = {
      isDescriptionButtonShown: false,
      selectedAttributes: {},
      fieldErrors: {},
    };
    this.getSelectedAttributes = getSelectedAttributes.bind(this);
    this.shouldDescriptionButtonBeVisible =
      shouldDescriptionButtonBeVisible.bind(this);
    this.getUpdatedAttibutes = getUpdatedAttibutes.bind(this);
    this.validateAttributes = validateAttributes.bind(this);
    this.styleClasses = styleClasses.bind(this);
  }

  componentDidUpdate() {
    if (shouldShowMoreButtonBeVisible.call(this)) {
      this.setState({ isDescriptionButtonShown: true });
    }
  }

  handleSelectAttr = (props) => {
    this.setState({ selectedAttributes: this.getUpdatedAttibutes(props) });
  };

  handleAddToBasket = () => {
    const { addItemToBasket, setToast } = this.props;
    const selectedAttributes = this.getSelectedAttributes();
    const fieldErrors = this.validateAttributes();

    this.setState({ fieldErrors });

    // If error fields were empty - submit
    if (!isObjectEmpty(fieldErrors)) {
      const { attributes, category, description, ...productForBasket } =
        this.props.product;

      addItemToBasket({
        ...productForBasket,
        attributes: selectedAttributes,
      });

      setToast({
        title: 'Product added to the busket',
        position: 'top',
        duration: 3000,
        status: 'success',
      });
    }
  };

  render() {
    let price = 0;

    const { currency, product, toggleDescription } = this.props;
    const { fieldErrors } = this.state;

    if (!product) {
      return <div>fetching product</div>;
    }

    // if product is fetched, select price
    price = selectPrice(product.prices, currency);

    // css classes
    const {
      productBrandClass,
      descriptionClass,
      productNameClass,
      descriptionExpandClass,
    } = this.styleClasses();

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
            <PriceWithIcon price={price} />
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

ProductPageDescriptionLeft.propTypes = {
  loadingPartialProduct: PropTypes.bool.isRequired,
  loadingProduct: PropTypes.bool.isRequired,
  product: PropTypes.any,
  descriptionExpanded: PropTypes.bool.isRequired,
  toggleDescription: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currency: globalsSelectors.getCurrency(state),
  products: basketSelectors.getProducts(state),
});

const withRedux = connect(mapStateToProps, {
  addItemToBasket,
  setToast,
});

const enhance = compose(withRedux, withParams);

export default enhance(ProductPageDescriptionLeft);
