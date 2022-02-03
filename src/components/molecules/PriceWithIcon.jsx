import { Component } from 'react';
import PropTypes from 'prop-types';
import { getCurrencyIcon } from '../../utils/getCurrencyIcon';
import globalsSelectors from '../../redux/features/globalState/globalsSelectors';
import { connect } from 'react-redux';

class PriceWithIcon extends Component {
  render() {
    const { currency, price } = this.props;
    return (
      <>
        {getCurrencyIcon(currency)}
        {price.toFixed(2)}
      </>
    );
  }
}

PriceWithIcon.propTypes = {
  price: PropTypes.number.isRequired,
};

/** Export */
const mapStateToProps = (state) => ({
  currency: globalsSelectors.getCurrency(state),
});

const withRedux = connect(mapStateToProps);

export default withRedux(PriceWithIcon);
