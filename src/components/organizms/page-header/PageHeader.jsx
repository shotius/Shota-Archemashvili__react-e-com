import { Component } from 'react';
import shoppingBagIcon from '../../../assets/icons/shoppingIcon.svg';
import { Button } from '../../atoms/buttons/Button';
import { ButtonGroup } from '../../molecules/ButtonGroup';
import { BasketButton } from '../buttons/BasketButton';
import { CurrencySwitcher } from '../buttons/CurrencySwitcher';

export class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { isCurrencyOpen: false, isBasketPopoverOpen: false };
    this.handleCurrencyToggle = this.handleCurrencyToggle.bind(this);
    this.handeBasketToggle = this.handeBasketToggle.bind(this);
  }

  handleCurrencyToggle() {
    this.setState({ isCurrencyOpen: !this.state.isCurrencyOpen });
  }

  handeBasketToggle() {
    this.setState({ isBasketPopoverOpen: !this.state.isBasketPopoverOpen });
  }

  render() {
    const { isBasketPopoverOpen, isCurrencyOpen } = this.state;
    return (
      <div className="header -center_content">
        <div className="container--lg -justify-between -position-relative">
          <ButtonGroup>
            <Button className="nav__btn--active nav__btn">woman</Button>
            <Button className="nav__btn">men</Button>
            <Button className="nav__btn">kids</Button>
          </ButtonGroup>

          <Button className="header__btn_shopping">
            <img src={shoppingBagIcon} alt="button for shopping" />
          </Button>

          <div className="header__btn_group">
            <CurrencySwitcher
              isOpen={isCurrencyOpen}
              onToggle={this.handleCurrencyToggle}
            />
            <BasketButton
              isOpen={isBasketPopoverOpen}
              onToggle={this.handeBasketToggle}
            />
          </div>
        </div>
      </div>
    );
  }
}
