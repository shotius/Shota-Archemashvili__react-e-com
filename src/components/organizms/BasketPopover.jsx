import { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalOverlay } from '../molecules/ModalOverlay';

export class BasketPopover extends Component {
  render() {
    const { isOpen, onClose } = this.props;
    return (
      <>
        <ModalOverlay cb={onClose} isOpen={isOpen} isColored={true} />
        <div className={`basket_popover ${isOpen && 'basket_popover--opened'}`}>
          Basket popover
          <div style={{height: 100}}></div>
        </div>
      </>
    );
  }
}

BasketPopover.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
