import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrency } from '../../../../redux/features/globalState/globalSlice';
import globalsSelectors from '../../../../redux/features/globalState/globalsSelectors';
import VStack from '../../../molecules/VStack';

class CurrencyList extends Component {
  render() {
    const { onClose, currencies, setCurrency } = this.props;

    const handleClick = (currency) => {
      setCurrency(currency);
      onClose();
    };

    return (
      <VStack>
        {currencies.map((currency) => (
          <button
            key={currency.label}
            className="btn btn--rect"
            onClick={() => handleClick(currency)}
          >
            {currency.symbol} {currency.label}
          </button>
        ))}
      </VStack>
    );
  }
}

CurrencyList.propTypes = {
  onClose: PropTypes.func.isRequired,
};

const mapPropsToState = (state) => ({
  currencies: globalsSelectors.getCurrencies(state),
});

const withRedux = connect(mapPropsToState, { setCurrency });

export default withRedux(CurrencyList);
