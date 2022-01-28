import PropTypes from 'prop-types';
import { Component } from 'react';
import basketIcon from '../../../assets/icons/basketIcon.svg';
import { Button } from '../../atoms/buttons/Button';
import BasketPopover from '../popovers/BasketPopover';

class BasketButton extends Component {
  render() {
    const { isOpen, onToggle } = this.props;

    return (
      <>
        <Button className="text--regular nav__btn_basket" onClick={onToggle}>
          <img src={basketIcon} alt="basket icon" />
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

export default BasketButton;
