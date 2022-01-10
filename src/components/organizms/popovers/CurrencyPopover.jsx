import { Component } from 'react';
import PropTypes from 'prop-types';
import { PopoverOverlay } from '../../molecules/overlays/Overlay';
import { connect } from 'react-redux';
import { setCurrency } from '../../../redux/features/globalState/globalSlice';

class CurrencyPopover extends Component {
  render() {
    const { isOpen, onClose } = this.props;
    const setCurrency = this.props.setCurrency;

    const handleClick = (currency) => {
      setCurrency(currency);
      onClose();
    };

    return (
      <>
        <PopoverOverlay isOpen={isOpen} cb={onClose} />
        <div
          className={`currency_popover ${
            isOpen && 'currency_popover--opened'
          } -zIndex-modal`}
        >
          <div className="v-stack ">
            <button className="btn btn--rect" onClick={() => handleClick('$')}>
              $ USD
            </button>
            <button className="btn btn--rect" onClick={() => handleClick('€')}>
              € EUR
            </button>
            <button className="btn btn--rect" onClick={() => handleClick('¥')}>
              ¥ JPY
            </button>
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

export default connect(null, { setCurrency })(CurrencyPopover);
