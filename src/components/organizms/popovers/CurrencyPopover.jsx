import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrency } from '../../../redux/features/globalState/globalSlice';
import globalsSelectors from '../../../redux/features/globalState/globalsSelectors';
import { PopoverOverlay } from '../../molecules/overlays/Overlay';
import { styleClasses } from './styleClasses';

class CurrencyPopover extends Component {
  render() {
    const { isOpen, onClose, currencies, setCurrency } = this.props;

    const { popoverContainer } = styleClasses.call(this);

    const handleClick = (currency) => {
      setCurrency(currency);
      onClose();
    };

    return (
      <>
        <PopoverOverlay isOpen={isOpen} cb={onClose} />
        <div className={popoverContainer}>
          <div className="v-stack">
            {currencies.map((currency) => (
              <button
                key={currency.label}
                className="btn btn--rect"
                onClick={() => handleClick(currency)}
              >
                {currency.symbol} {currency.label}
              </button>
            ))}
          </div>
        </div>
      </>
    );
  }
}

CurrencyPopover.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

const mapPropsToState = (state) => ({
  currencies: globalsSelectors.getCurrencies(state),
});

const withRedux = connect(mapPropsToState, { setCurrency });

export default withRedux(CurrencyPopover);
