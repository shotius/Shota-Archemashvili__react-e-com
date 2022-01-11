import { Component } from 'react';
import PropTypes from 'prop-types';
import { PopoverOverlay } from '../../molecules/overlays/Overlay';
import { connect } from 'react-redux';
import { setCurrency } from '../../../redux/features/globalState/globalSlice';
import classNames from 'classnames';

class CurrencyPopover extends Component {
  render() {
    const { isOpen, onClose } = this.props;
    const setCurrency = this.props.setCurrency;

    const className = classNames('currency_popover', '-zIndex-modal', {
      'currency_popover--opened': isOpen,
    });

    const handleClick = (currency) => {
      setCurrency(currency);
      onClose();
    };

    return (
      <>
        <PopoverOverlay isOpen={isOpen} cb={onClose} />
        <div className={className}>
          <div className="v-stack ">
            <button
              className="btn btn--rect"
              onClick={() => handleClick('USD')}
            >
              $ USD
            </button>
            <button
              className="btn btn--rect"
              onClick={() => handleClick('GBP')}
            >
              £ GBP
            </button>
            <button
              className="btn btn--rect"
              onClick={() => handleClick('JPY')}
            >
              ¥ JPY
            </button>
            <button
              className="btn btn--rect"
              onClick={() => handleClick('RUB')}
            >
              ₽ RUB
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
