import { Component } from 'react';
import TextRegular from '../../../atoms/typography/TextRegular';
import PropTypes from 'prop-types';
import TextMain from '../../../atoms/typography/TextMain';
import { Button } from '../../../atoms/buttons/Button';
import { getCurrencyIcon } from '../../../../utils/getCurrencyIcon';
import { selectPrice } from '../../../../utils/selectPrice';
import {
  addItemToBasket,
  removeItemFromBasket,
} from '../../../../redux/features/basket/basketSlice';
import { connect } from 'react-redux';
import globalsSelectors from '../../../../redux/features/globalState/globalsSelectors';
import basketPopoverCardUtils from './basketPopoverCardUtils';
import HeadingSecondary from '../../../atoms/typography/HeadingSecondary';
import { styleClasses } from './styleClasses';

const { getAttrButton, getPictureWidth } = basketPopoverCardUtils;

class BasketPopoverCard extends Component {
  render() {
    const { currency, product, increase, decrease, size } = this.props;
    const attributesKeys = Object.keys(product.attributes);
    const price = selectPrice(product.prices, currency);

    const { cardClass, brandNameClass, priceClass } = styleClasses.call(this);

    return (
      <div className={cardClass}>
        {/* Description  */}
        <div className="v-stack basket_popover__description">
          {/* Headings */}
          <div>
            <p className={brandNameClass}>{product.brand}</p>
            <TextRegular>{product.name}</TextRegular>
          </div>

          {/* Price  */}
          <TextMain className={priceClass}>
            {getCurrencyIcon(currency)}
            {(price * product.count).toFixed(2)}
          </TextMain>

          {/* Attributes  */}
          <div className="basket_popover__attributes">
            {/* Only sizes and colors will be displayed  */}
            {attributesKeys &&
              attributesKeys.map((attr) => getAttrButton.call(this, attr))}
          </div>
        </div>

        {/* Add remove item  */}
        <div className="basket_popover__controls">
          <Button
            className="btn--outline btn--small basket_popover__plus"
            onClick={() => increase(product)}
          >
            +
          </Button>
          <TextRegular>{product.count}</TextRegular>
          <Button
            className="btn--outline btn--small basket_popover__minus"
            onClick={() => decrease(product)}
          >
            -
          </Button>
        </div>

        {/* Picture  */}
        <div>
          <img
            src={product.gallery[0]}
            alt="product"
            height="100%"
            width={getPictureWidth(size)}
          />
        </div>
      </div>
    );
  }
}

BasketPopoverCard.propTypes = {
  product: PropTypes.any,
  size: PropTypes.oneOf(['big', 'small']).isRequired,
};

const mapStateToProps = (state) => ({
  currency: globalsSelectors.getCurrency(state),
});

const withRedux = connect(mapStateToProps, {
  increase: addItemToBasket,
  decrease: removeItemFromBasket,
});

export default withRedux(BasketPopoverCard);
