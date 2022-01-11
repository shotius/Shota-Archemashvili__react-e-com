import { Component } from 'react';
import { connect } from 'react-redux';
import shoppingBagIcon from '../../../assets/icons/shoppingIcon.svg';
import { withNavigation } from '../../../utils/HOC/withNavigation';
import { Button } from '../../atoms/buttons/Button';
import { ButtonGroup } from '../../molecules/ButtonGroup';
import { BasketButton } from '../buttons/BasketButton';
import CurrencySwitcher from '../buttons/CurrencySwitcher';
import { setCategory } from '../../../redux/features/globalState/globalSlice';
import classNames from 'classnames';

class PageHeader extends Component {
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
    const { category: selectedCategory, setCategory } = this.props;

    const clothesButtonClass = classNames('nav__btn', {
      'nav__btn--active': selectedCategory === 'clothes',
    });

    const techButtonClass = classNames('nav__btn', {
      'nav__btn--active': selectedCategory === 'tech',
    });

    return (
      <div className="header -center_content">
        <div className="container--lg -justify-between -position-relative">
          {/* navigation  */}
          <ButtonGroup>
            <Button
              className={clothesButtonClass}
              onClick={() => setCategory('clothes')}
            >
              Clothes
            </Button>
            <Button
              className={techButtonClass}
              onClick={() => setCategory('tech')}
            >
              Tech
            </Button>
          </ButtonGroup>

          {/* Logo */}
          <Button
            className="header__btn_shopping"
            onClick={() => this.props.navigate('/catalog')}
          >
            <img src={shoppingBagIcon} alt="button for shopping" />
          </Button>

          {/* Switchers  */}
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

// default export
const mapStateToProps = (state) => ({
  category: state.globals.category,
});

const withRedux = connect(mapStateToProps, { setCategory });

export default withRedux(withNavigation(PageHeader));
