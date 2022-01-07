import { Component } from 'react';
import PropTypes from 'prop-types';
import { PopoverOverlay } from '../molecules/Overlay';

export class CurrencyPopover extends Component {

  render() {
    const {isOpen, onClose} = this.props;
    return (
      <>
        <PopoverOverlay isOpen={isOpen} cb={onClose}/>
        <div
          className={`currency_popover ${isOpen && 'currency_popover--active'}`}
        >
          <div className="v-stack ">
            <button className="btn btn_rect" onClick={onClose}>$ USD</button>
            <button className="btn btn_rect" onClick={onClose}>€ EUR</button>
            <button className="btn btn_rect" onClick={onClose}>¥ JPY</button>
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
