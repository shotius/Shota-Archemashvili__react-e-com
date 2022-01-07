import { Component } from 'react';
import shoppingBagIcon from '../../assets/icons/shoppingIcon.svg';
import dropdownIcon from '../../assets/icons/dropdownIcon.svg';
import basketIcon from '../../assets/icons/basketIcon.svg';
import dolarIcon from '../../assets/icons/dolarIcon.svg';
import { CurrencyPopover } from './CurrencyPopover';
import { BasketPopover } from './BasketPopover';

export class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { isCurrencyOpen: false, isBasketOpen: false };
    this.handleCurrencyToggle = this.handleCurrencyToggle.bind(this);
    this.handeBasketToggle = this.handeBasketToggle.bind(this);
  }

  handleCurrencyToggle() {
    this.setState({ isCurrencyOpen: !this.state.isCurrencyOpen });
  }

  handeBasketToggle() {
    this.setState({ isBasketOpen: !this.state.isBasketOpen });
  }

  render() {
    const { isBasketOpen, isCurrencyOpen } = this.state;
    return (
      <div className="header -center">
        <div className="page_wrapper--outer -justify-between -position-relative">
          <div className="header__nav">
            <button className="nav__btn--active nav__btn btn">woman</button>
            <button className="btn nav__btn">men</button>
            <button className="btn nav__btn">kids</button>
          </div>

          <button className="header__btn_shopping btn ">
            <img src={shoppingBagIcon} alt="button for shopping" />
          </button>

          <div className="header__btn_group">
            <button
              className="text__regular btn nav__btn_currency"
              onClick={this.handleCurrencyToggle}
            >
              <img src={dolarIcon} alt="currency icon" />
              <img
                src={dropdownIcon}
                className={`nav__btn_dropdown ${
                  isCurrencyOpen && 'nav__btn_dropdown--opened'
                }`}
                alt="currentcy change dropwdown"
              />
            </button>
            <CurrencyPopover
              isOpen={isCurrencyOpen}
              onClose={this.handleCurrencyToggle}
            />
            <BasketPopover
              onClose={this.handeBasketToggle}
              isOpen={isBasketOpen}
            />
            <button
              className="text__regular btn nav__btn_basket"
              onClick={this.handeBasketToggle}
            >
              <img src={basketIcon} alt="basket icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
