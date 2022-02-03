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
import { styleClasses } from './styleClasses';
import { setToast } from '../../../../redux/features/globalState/globalSlice';
import PriceWithIcon from '../../../molecules/PriceWithIcon';

const { getAttrButton, getPictureWidth } = basketPopoverCardUtils;

class BasketPopoverCard extends Component {
  render() {
    const { currency, product, increase, decrease, size } = this.props;
    const attributesKeys = Object.keys(product.attributes);
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
        <div className="v-stack basket_popover__description">
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
          <div className="basket_popover__attributes">
            {/* Only sizes and colors will be displayed  */}
            {attributesKeys &&
              attributesKeys.map((attr) => getAttrButton.call(this, attr))}
          </div>
        </div>

        {/* Add remove item  */}
        <div className="basket_popover__controls">
          <Button className={btnPlusClass} onClick={() => increase(product)}>
            +
          </Button>
          <TextRegular className={productCount}>{product.count}</TextRegular>
          <Button
            className={btnMinusClass}
            onClick={() => {
              if (product.count === 1)
                this.props.setToast({
                  title: `${product.name} removed from basket`,
                  duration: 3000,
                });
              decrease(product);
            }}
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
  setToast,
});

export default withRedux(BasketPopoverCard);
