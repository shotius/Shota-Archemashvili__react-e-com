import { Component } from 'react';
import { connect } from 'react-redux';
import shoppingBagIcon from '../../../assets/icons/shoppingIcon.svg';
import { Button } from '../../atoms/buttons/Button';
import { ButtonGroup } from '../../molecules/ButtonGroup';
import BasketButton from '../buttons/BasketButton';
import CurrencySwitcher from '../buttons/CurrencySwitcher';
import { CATALOG_ROUTE } from '../../../config/constants';
import NavButton from '../../atoms/buttons/NavButton';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import globalsSelectors from '../../../redux/features/globalState/globalsSelectors';
import {
  setCategories,
  setCurrencies,
} from '../../../redux/features/globalState/globalSlice';
import pageHeaderUtils from './pageHeader.utils';

const { getCurrenciesAndCategories } = pageHeaderUtils;

class PageHeader extends Component {
  state = { isCurrencyOpen: false, isBasketPopoverOpen: false };

  componentDidMount = async () => {
    const [categories, currencies] = await getCurrenciesAndCategories();

    this.props.setCategories(categories);
    this.props.setCurrencies(currencies);
  };

  handleCurrencyToggle = () => {
    this.setState({ isCurrencyOpen: !this.state.isCurrencyOpen });
  };

  handeBasketToggle = () => {
    this.setState({ isBasketPopoverOpen: !this.state.isBasketPopoverOpen });
  };

  render() {
    const { isBasketPopoverOpen, isCurrencyOpen } = this.state;
    const {
      defaultCategory: selectedCategory,
      history,
      categories,
    } = this.props;

    return (
      <div className="header -center_content">
        <div className="container--lg -justify-between -position-relative">
          {/* navigation  */}
          <ButtonGroup>
            {categories.map((category) => (
              <NavButton key={category} to={`${CATALOG_ROUTE}/${category}`}>
                {category}
              </NavButton>
            ))}
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
