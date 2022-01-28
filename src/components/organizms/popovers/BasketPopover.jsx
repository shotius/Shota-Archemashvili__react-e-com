import PropTypes from 'prop-types';
import { Component } from 'react';
import TextRoboto from '../../atoms/typography/TextRoboto';
import TextRegular from '../../atoms/typography/TextRegular';
import { ModalOverlay } from '../../molecules/overlays/ModalOverlay';
import { PopoverOverlay } from '../../molecules/overlays/Overlay';
import BasketPopoverCard from '../cards/BasketPopoverCard';
import { styleClasses } from './styleClasses';
import { Button } from '../../atoms/buttons/Button';
import { connect } from 'react-redux';

class BasketPopover extends Component {
  render() {
    const { isOpen, currency, onClose, products } = this.props;
    const { basketPopoverClass } = styleClasses.call(this);

    return (
      <>
        <PopoverOverlay cb={onClose} isOpen={isOpen} isColored={false} />
        <ModalOverlay cb={onClose} isOpen={isOpen} isColored={true} />
        <div className={basketPopoverClass}>
          {/* heading  */}
          <TextRegular>
            <b>My bag, </b>
            {products.length} items
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
            <TextRegular className="text--bold">$100</TextRegular>
          </div>

          {/* Basket Button */}
          <div className="-flex -justify-between">
            <Button className="btn--outline -w-full -mr-6">View Bag</Button>
            <Button className="btn--primary -w-full -ml-6">Check Out</Button>
          </div>
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

export default withRedux(BasketPopover);
