import { Component } from 'react';
import PropTypes from 'prop-types';
import basketIcon from '../../../assets/icons/basketIcon.svg';
import { BasketPopover } from '../popovers/BasketPopover';
import { Button } from '../../atoms/buttons/Button';

export class BasketButton extends Component {
  render() {
    const { isOpen, onToggle } = this.props;

    return (
      <>
        <BasketPopover onClose={onToggle} isOpen={isOpen} />
        <Button className="text__regular nav__btn_basket" onClick={onToggle}>
          <img src={basketIcon} alt="basket icon" />
        </Button>
      </>
    );
  }
}

BasketButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
