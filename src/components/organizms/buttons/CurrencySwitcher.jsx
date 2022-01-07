import { Component } from 'react';
import PropTypes from 'prop-types';
import dolarIcon from '../../../assets/icons/dolarIcon.svg';
import dropdownIcon from '../../../assets/icons/dropdownIcon.svg';
import classNames from 'classnames';
import { CurrencyPopover } from '../popovers/CurrencyPopover';
import { Button } from '../../atoms/buttons/Button';

export class CurrencySwitcher extends Component {
  render() {
    const { isOpen, onToggle } = this.props;

    const className = classNames('nav__btn_dropdown', {
      'nav__btn_dropdown--opened': isOpen,
    });

    return (
      <>
        <Button className="text__regular nav__btn_currency" onClick={onToggle}>
          <img src={dolarIcon} alt="currency icon" />
          <img
            src={dropdownIcon}
            className={className}
            alt="currentcy change dropwdown"
          />
        </Button>
        <CurrencyPopover isOpen={isOpen} onClose={onToggle} />
      </>
    );
  }
}

CurrencySwitcher.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
