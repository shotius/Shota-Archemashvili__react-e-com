import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrency } from '../../../redux/features/globalState/globalSlice';
import { PopoverOverlay } from '../../molecules/overlays/Overlay';
import { styleClasses } from './styleClasses';

class CurrencyPopover extends Component {
  render() {
    const { isOpen, onClose } = this.props;
    const setCurrency = this.props.setCurrency;

    const { popoverContainer } = styleClasses.call(this);

    const handleClick = (currency) => {
      setCurrency(currency);
      onClose();
    };

    return (
      <>
        <PopoverOverlay isOpen={isOpen} cb={onClose} />
        <div className={popoverContainer}>
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
