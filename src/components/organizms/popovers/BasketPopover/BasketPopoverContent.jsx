import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { compose } from 'redux';
import { getCartRoute } from '../../../../config/constants';
import basketSelectors from '../../../../redux/features/basket/basketSelectors';
import { Button } from '../../../atoms/buttons/Button';
import HeadingSecondary from '../../../atoms/typography/HeadingSecondary';
import TextRegular from '../../../atoms/typography/TextRegular';
import TextRoboto from '../../../atoms/typography/TextRoboto';
import PriceWithIcon from '../../../molecules/PriceWithIcon';
import CartItemCard from '../../cards/BasketCard/CartItemCard';

class BasketPopover extends Component {
  render() {
    const { onClose, products, totalPrice, totalProducts, history } =
      this.props;
    return (
      <>
        {!!totalProducts ? (
          <>
            {/* Basket popover heading  */}
            <TextRegular>
              <b>My bag, </b>
              {products.length} items
            </TextRegular>

            {/* Cards in the basket */}
            <div className="basket-popover__cards">
              {products.map((item, i) => (
                <CartItemCard
                  key={item.id + i}
                  product={item}
                  size="small"
                  onClose={onClose}
                />
              ))}
            </div>

            {/* Total Price  */}
            <div className="basket-popover__total-price">
              <TextRoboto className="text--regular text--semi-bold">
                Total:
              </TextRoboto>
              <TextRegular className="text--bold">
                <PriceWithIcon price={totalPrice} />
              </TextRegular>
            </div>
          </>
        ) : (
          <HeadingSecondary className="-text-center -pb-32">
            Basket is empty
          </HeadingSecondary>
        )}
        {/* Basket Button */}
        <div className="-flex -justify-between">
          <Button
            className="btn--outline -w-full -mr-6"
            onClick={() => history.push(getCartRoute())}
          >
            View Bag
          </Button>
          <Button className="btn--primary -w-full -ml-6">Check Out</Button>
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

/** Export */
const mapStateToProps = (state) => ({
  totalProducts: basketSelectors.getTotalProducts(state),
  totalPrice: basketSelectors.getTotalPrice(state),
  products: basketSelectors.getProducts(state),
});

const withRedux = connect(mapStateToProps);
const enhance = compose(withRouter, withRedux);

export default enhance(BasketPopover);
