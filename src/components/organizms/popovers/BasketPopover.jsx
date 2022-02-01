import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { compose } from 'redux';
import { getCurrencyIcon } from '../../../utils/getCurrencyIcon';
import { selectPrice } from '../../../utils/selectPrice';
import { Button } from '../../atoms/buttons/Button';
import HeadingSecondary from '../../atoms/typography/HeadingSecondary';
import TextRegular from '../../atoms/typography/TextRegular';
import TextRoboto from '../../atoms/typography/TextRoboto';
import { ModalOverlay } from '../../molecules/overlays/ModalOverlay';
import { PopoverOverlay } from '../../molecules/overlays/Overlay';
import BasketPopoverCard from '../cards/BasketPopoverCard';
import { styleClasses } from './styleClasses';

class BasketPopover extends Component {
  render() {
    const { isOpen, currency, onClose, products, history } = this.props;
    const { basketPopoverClass } = styleClasses.call(this);

    // calculate total price
    const totalPrice = products.length
      ? products.reduce(
          (acc, cur) => (acc += selectPrice(cur.prices, currency) * cur.count),
          0
        )
      : 0;

    const totalProducts = !!products.length
      ? products.reduce((total, product) => (total += product.count), 0)
      : 0;

    return (
      <>
        <PopoverOverlay cb={onClose} isOpen={isOpen} isColored={false} />
        <ModalOverlay cb={onClose} isOpen={isOpen} isColored={true} />

        <div className={basketPopoverClass}>
          {!!totalProducts ? (
            <>
              {/* heading  */}
              <TextRegular>
                <b>My bag, </b>
                {totalProducts} items
              </TextRegular>

              {/* Cards  */}
              <div className="basket_popover__cards">
                {products.map((item, i) => (
                  <BasketPopoverCard
                    key={item.id + i}
                    product={item}
                    currency={currency}
                  />
                ))}
              </div>

              <div className="basket_popover__total-price">
                <TextRoboto className="text--regular text--semi-bold">
                  Total:
                </TextRoboto>
                <TextRegular className="text--bold">
                  {getCurrencyIcon(currency)}
                  {totalPrice.toFixed(2)}
                </TextRegular>
              </div>
              {/* Basket Button */}
              <div className="-flex -justify-between">
                <Button
                  className="btn--outline -w-full -mr-6"
                  onClick={() => history.push('/basket')}
                >
                  View Bag
                </Button>
                <Button className="btn--primary -w-full -ml-6">
                  Check Out
                </Button>
              </div>
            </>
          ) : (
            <HeadingSecondary className="-text-center">
              Basket is empty
            </HeadingSecondary>
          )}
        </div>
      </>
    );
  }
}

BasketPopover.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  addItemToBasket: PropTypes.func,
  currency: PropTypes.string,
};

const mapStateToProps = (state) => ({
  products: state.basket.products,
  currency: state.globals.currency,
});
const withRedux = connect(mapStateToProps);

const enhance = compose(withRouter, withRedux);

export default enhance(BasketPopover);
