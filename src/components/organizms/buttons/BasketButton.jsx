import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import basketIcon from '../../../assets/icons/basketIcon.svg';
import { Button } from '../../atoms/buttons/Button';
import BasketPopover from '../popovers/BasketPopover';
import { styleClasses } from './styleClasses';

class BasketButton extends Component {
  render() {
    const { isOpen, onToggle, products } = this.props;

    const { getBadgeClass, basketClass } = styleClasses.call(this);

    const totalProducts = !!products.length
      ? products.reduce((total, product) => (total += product.count), 0)
      : 0;

    return (
      <>
        <Button className={basketClass} onClick={onToggle}>
          <img src={basketIcon} alt="basket icon" />
          <div className={getBadgeClass(totalProducts)}>
            <p>{totalProducts}</p>
          </div>
        </Button>

        <BasketPopover onClose={onToggle} isOpen={isOpen} />
      </>
    );
  }
}

BasketButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.basket.products,
});
const withRedux = connect(mapStateToProps);

export default withRedux(BasketButton);
