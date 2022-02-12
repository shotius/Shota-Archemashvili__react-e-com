import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import shoppingBagIcon from '../../../assets/icons/shoppingIcon.svg';
import { CATALOG_ROUTE } from '../../../config/constants';
import {
  setCategories,
  setCurrencies
} from '../../../redux/features/globalState/globalSlice';
import globalsSelectors from '../../../redux/features/globalState/globalsSelectors';
import { Button } from '../../atoms/buttons/Button';
import NavButton from '../../atoms/buttons/NavButton';
import { ButtonGroup } from '../../molecules/ButtonGroup';
import { BasketPopover } from '../popovers/BasketPopover';
import { CurrencySwitcherPopover } from '../popovers/CurrencySwitcherPopover';
import MoreCategoryPopover from '../popovers/MoreCategoryPopover/MoreCategoriesPopover';
import pageHeaderUtils from './pageHeader.utils';

const { getCurrenciesAndCategories } = pageHeaderUtils;

class PageHeader extends Component {
  state = {
    isCurrencyOpen: false,
    isBasketPopoverOpen: false,
    isMoreCategoryPopoverOpen: false,
  };

  componentDidMount = async () => {
    const [categories, currencies] = await getCurrenciesAndCategories();

    this.props.setCategories(categories);
    this.props.setCurrencies(currencies);
  };

  toggleMoreCategoryPopover = () => {
    this.setState((state) => ({
      isMoreCategoryPopoverOpen: !state.isMoreCategoryPopoverOpen,
    }));
  };

  toggleCurrencyPopover = () => {
    this.setState((state) => ({ isCurrencyOpen: !state.isCurrencyOpen }));
  };

  toggleBasketPopover = () => {
    this.setState((state) => ({
      isBasketPopoverOpen: !state.isBasketPopoverOpen,
    }));
  };

  render() {
    const { isBasketPopoverOpen, isCurrencyOpen, isMoreCategoryPopoverOpen } =
      this.state;

    const {
      defaultCategory: selectedCategory,
      history,
      categories,
    } = this.props;

    const categoriesOnNavbar = categories.slice(0, 3);
    const categoriesOnPopover = categories.slice(3);

    return (
      <div className="header -center_content">
        <div className="container--lg -justify-between -position-relative">
          {/* navigation  */}
          <ButtonGroup>
            {/* Buttons on the navigation  */}
            {categoriesOnNavbar.map((category) => (
              <NavButton key={category} to={`${CATALOG_ROUTE}/${category}`}>
                {category}
              </NavButton>
            ))}
            {/* Buttons on the the popover  */}
            <MoreCategoryPopover
              categories={categoriesOnPopover}
              isOpen={isMoreCategoryPopoverOpen}
              onToggle={this.toggleMoreCategoryPopover}
            />
          </ButtonGroup>

          {/* Logo */}
          <Button
            className="header__btn_shopping"
            onClick={() => history.push(`${CATALOG_ROUTE}/${selectedCategory}`)}
          >
            <img src={shoppingBagIcon} alt="button for shopping" />
          </Button>

          {/* Switchers  */}
          <div className="header__btn_group">
            <CurrencySwitcherPopover
              isOpen={isCurrencyOpen}
              onToggle={this.toggleCurrencyPopover}
            />
            <BasketPopover
              isOpen={isBasketPopoverOpen}
              onToggle={this.toggleBasketPopover}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapPropsToState = (state) => ({
  defaultCategory: globalsSelectors.getDefaultCategory(state),
  categories: globalsSelectors.getCategories(state),
});

const withRedux = connect(mapPropsToState, {
  setCategories,
  setCurrencies,
});

const enhance = compose(withRouter, withRedux);

export default enhance(PageHeader);
