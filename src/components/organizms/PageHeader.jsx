import { Component } from 'react';
import shoppingBagIcon from '../../assets/icons/shoppingIcon.svg';
import dropdownIcon from '../../assets/icons/dropdownIcon.svg';
import basketIcon from '../../assets/icons/basketIcon.svg';
import dolarIcon from '../../assets/icons/dolarIcon.svg';
import { CurrencyPopover } from './CurrencyPopover';

export class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleCurrencyToggle = this.handleCurrencyToggle.bind(this);
  }

  handleCurrencyToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className="header -center">
        <div className="page_wrapper--outer -justify-between -position-relative">
          <div className="-justify-between nav">
            <button className="nav__btn--active nav__btn btn">woman</button>
            <button className="btn nav__btn">men</button>
            <button className="btn nav__btn">kids</button>
          </div>
          <button className="btn -position-absolute -center-absolute">
            <img src={shoppingBagIcon} alt="button for shopping" />
          </button>

          <div className="nav__btn_group">
            <button
              className="text__regular btn nav__btn_currency"
              onClick={this.handleCurrencyToggle}
            >
              <img src={dolarIcon} alt="currency icon" />
              <img
                src={dropdownIcon}
                className={`nav__btn_dropdown ${
                  this.state.isOpen && 'nav__btn_dropdown--opened'
                }`}
                alt="currentcy change dropwdown"
              />
            </button>
            <CurrencyPopover
              isOpen={this.state.isOpen}
              onClose={this.handleCurrencyToggle}
            />
            <button className="text__regular btn nav__btn_basket">
              <img src={basketIcon} alt="basket icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
