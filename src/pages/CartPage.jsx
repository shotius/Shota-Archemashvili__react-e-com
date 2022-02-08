import { Component } from 'react';
import { connect } from 'react-redux';
import Divider from '../components/atoms/Divider';
import HeadingSecondary from '../components/atoms/typography/HeadingSecondary';
import TextRegular from '../components/atoms/typography/TextRegular';
import TextRoboto from '../components/atoms/typography/TextRoboto';
import PriceWithIcon from '../components/molecules/PriceWithIcon';
import CartItemCard from '../components/organizms/cards/BasketCard/CartItemCard';
import { PublicLayout } from '../components/templates/PublicLayout';
import basketSelectors from '../redux/features/basket/basketSelectors';

class BasketPage extends Component {
  render() {
    const { products, totalPrice } = this.props;

    return (
      <PublicLayout>
        <HeadingSecondary className="heading--bold -pt-80 -pb-60">
          Cart
        </HeadingSecondary>

        {/* Products  */}
        {products.map((product) => (
          <div key={product.id}>
            <Divider />
            <CartItemCard product={product} size="big" text/>
          </div>
        ))}

        {/* Basket empty text  */}
        {!products.length && (
          <HeadingSecondary className="page-cart__text-empty">
            Your basket is empty
          </HeadingSecondary>
        )}

        <Divider />

        {/* Total Price  */}
        <div className="page-cart__totalPrice">
          <TextRoboto className="text--regular text--semi-bold">
            Total:
          </TextRoboto>
          <TextRegular className="text--bold">
            <PriceWithIcon price={totalPrice} />
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
});

const withRedux = connect(mapStateToProps);

export default withRedux(BasketPage);
