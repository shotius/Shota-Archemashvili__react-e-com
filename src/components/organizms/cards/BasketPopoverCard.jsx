import { Component } from 'react';
import TextRegular from '../../atoms/typography/TextRegular';
import PropTypes from 'prop-types';
import TextMain from '../../atoms/typography/TextMain';
import { Button } from '../../atoms/buttons/Button';
import { getCurrencyIcon } from '../../../utils/getCurrencyIcon';
import { selectPrice } from '../../../utils/selectPrice';
import {
  addItemToBasket,
  removeItemFromBasket,
} from '../../../redux/features/basket/basketSlice';
import { connect } from 'react-redux';

class BasketPopoverCard extends Component {
  render() {
    const { currency, product, increase, decrease } = this.props;

    const price = selectPrice(product.prices, currency);

    return (
      <div className="basket_popover__card">
        {/* Description  */}
        <div className="v-stack basket_popover__description">
          <TextRegular>{product.name}</TextRegular>
          <TextMain>
            {getCurrencyIcon(currency)}
            {price}
          </TextMain>
          <div className="-flex -gap-8">
            <Button className="btn--outline btn--small">S</Button>
            <Button className="btn--outline btn--small">m</Button>
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
            width="105px"
          />
        </div>
      </div>
    );
  }
}

BasketPopoverCard.propTypes = {
  product: PropTypes.any,
  currency: PropTypes.string,
};

const withRedux = connect(null, {
  increase: addItemToBasket,
  decrease: removeItemFromBasket,
});

export default withRedux(BasketPopoverCard);
