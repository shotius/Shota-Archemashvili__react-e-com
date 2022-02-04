import { Component } from 'react';
import TextRegular from '../../../atoms/typography/TextRegular';
import PropTypes from 'prop-types';
import TextMain from '../../../atoms/typography/TextMain';
import { Button } from '../../../atoms/buttons/Button';
import { selectPrice } from '../../../../utils/selectPrice';
import {
  addItemToBasket,
  removeItemFromBasket,
} from '../../../../redux/features/basket/basketSlice';
import { connect } from 'react-redux';
import globalsSelectors from '../../../../redux/features/globalState/globalsSelectors';
import basketPopoverCardUtils from './CardItemCard.utils';
import { styleClasses } from './styleClasses';
import { setToast } from '../../../../redux/features/globalState/globalSlice';
import PriceWithIcon from '../../../molecules/PriceWithIcon';
import CartAttributeButton from '../../../atoms/buttons/AttributeButton/CartAttributeButton';

const {
  getAttrButtonSmall,
  getPictureWidth,
  handleEncrease,
  isYes,
  isYesOrNo,
} = basketPopoverCardUtils;

class CartItemCard extends Component {
  constructor(props) {
    super(props);
    this.getAttrButtonSmall = getAttrButtonSmall.bind(this);
    this.handleEncrease = handleEncrease.bind(this);
  }

  getAttributeButton = (attributes, attr) => {
    const size = this.props.size;
    if (isYesOrNo(attributes[attr])) {
      if (isYes(attributes[attr]))
        return (
          <CartAttributeButton key={attr} size={size}>
            {attr}
          </CartAttributeButton>
        );
      return null;
    }

    return (
      <CartAttributeButton key={attr} size={size}>
        {attributes[attr]}
      </CartAttributeButton>
    );
  };

  render() {
    const { currency, product, increase, size } = this.props;
    const attributes = product.attributes || [];

    const attributesKeys = Object.keys(attributes) || [];
    const price = selectPrice(product.prices, currency);

    const {
      cardClass,
      brandNameClass,
      priceClass,
      btnMinusClass,
      btnPlusClass,
      productCount,
      productNameClass,
    } = styleClasses.call(this);

    return (
      <div className={cardClass}>
        {/* Description  */}
        <div className="v-stack cart-item-card__description">
          {/* Headings */}
          <div>
            <p className={brandNameClass}>{product.brand}</p>
            <p className={productNameClass}>{product.name}</p>
          </div>

          {/* Price  */}
          <TextMain className={priceClass}>
            <PriceWithIcon price={price * product.count} />
          </TextMain>

          {/* Attributes  */}
          <div className="cart-item-card__attributes">
            {attributesKeys.map((attr) =>
              this.getAttributeButton(attributes, attr)
            )}
          </div>
        </div>

        {/* Add remove item  */}
        <div className="cart-item-card__controls">
          <Button className={btnPlusClass} onClick={() => increase(product)}>
            +
          </Button>
          <TextRegular className={productCount}>{product.count}</TextRegular>
          <Button className={btnMinusClass} onClick={this.handleEncrease}>
            -
          </Button>
        </div>

        {/* Picture  */}
        <div
          style={{
            overflow: 'hidden',
            width: getPictureWidth(size),
          }}
        >
          <img
            src={product.gallery[0]}
            alt="product"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>
    );
  }
}

CartItemCard.propTypes = {
  product: PropTypes.any,
  size: PropTypes.oneOf(['big', 'small']).isRequired,
};

const mapStateToProps = (state) => ({
  currency: globalsSelectors.getCurrency(state),
});

const withRedux = connect(mapStateToProps, {
  increase: addItemToBasket,
  decrease: removeItemFromBasket,
  setToast,
});

export default withRedux(CartItemCard);
