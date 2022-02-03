import { Component } from 'react';
import { connect } from 'react-redux';
import HeadingSecondary from '../components/atoms/typography/HeadingSecondary';
import TextRegular from '../components/atoms/typography/TextRegular';
import TextRoboto from '../components/atoms/typography/TextRoboto';
import BasketPopoverCard from '../components/organizms/cards/BasketPopoverCard';
import { PublicLayout } from '../components/templates/PublicLayout';
import basketSelectors from '../redux/features/basket/basketSelectors';
import { getTotalPrice } from '../redux/features/basket/basketSlice';
import globalsSelectors from '../redux/features/globalState/globalsSelectors';
import { getCurrencyIcon } from '../utils/getCurrencyIcon';

class BasketPage extends Component {
  render() {
    const { products, currency, totalPrice } = this.props;

    // calculate total price
    return (
      <PublicLayout>
        <HeadingSecondary className="heading--bold -pt-80 -pb-60">
          Cart
        </HeadingSecondary>
        {products.map((product) => (
          <BasketPopoverCard key={product.id} product={product} />
        ))}
        <div className="basket_popover__total-price">
          <TextRoboto className="text--regular text--semi-bold">
            Total:
          </TextRoboto>
          <TextRegular className="text--bold">
            {getCurrencyIcon(currency)}
            {totalPrice.toFixed(2)}
          </TextRegular>
        </div>
      </PublicLayout>
    );
  }
}

/** Export */
const mapStateToProps = (state) => ({
  totalPrice: basketSelectors.getTotalPrice(state),
  products: basketSelectors.getProducts(state),
  currency: globalsSelectors.getCurrency(state),
});

const withRedux = connect(mapStateToProps);

export default withRedux(BasketPage);
