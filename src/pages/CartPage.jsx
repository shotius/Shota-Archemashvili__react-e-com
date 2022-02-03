import { Component } from 'react';
import { connect } from 'react-redux';
import Divider from '../components/atoms/Divider';
import HeadingSecondary from '../components/atoms/typography/HeadingSecondary';
import TextRegular from '../components/atoms/typography/TextRegular';
import TextRoboto from '../components/atoms/typography/TextRoboto';
import BasketPopoverCard from '../components/organizms/cards/BasketCard/BasketPopoverCard';
import { PublicLayout } from '../components/templates/PublicLayout';
import basketSelectors from '../redux/features/basket/basketSelectors';
import globalsSelectors from '../redux/features/globalState/globalsSelectors';
import { getCurrencyIcon } from '../utils/getCurrencyIcon';

class BasketPage extends Component {
  render() {
    const { products, currency, totalPrice } = this.props;

    return (
      <PublicLayout>
        <HeadingSecondary className="heading--bold -pt-80 -pb-60">
          Cart
        </HeadingSecondary>

        {products.map((product) => (
          <div>
            <Divider />
            <BasketPopoverCard key={product.id} product={product} size="big" />
          </div>
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
