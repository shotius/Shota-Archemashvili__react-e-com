import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import dropdownIcon from '../../../assets/icons/dropdownIcon.svg';
import globalsSelectors from '../../../redux/features/globalState/globalsSelectors';
import { Button } from '../../atoms/buttons/Button';
import TextRoboto from '../../atoms/typography/TextRoboto';
import CurrencyPopover from '../popovers/CurrencyPopover';

class CurrencySwitcher extends Component {
  render() {
    const { isOpen, onToggle, currency } = this.props;

    const className = classNames('nav__btn_dropdown', {
      'nav__btn_dropdown--opened': isOpen,
    });

    return (
      <>
        <Button className="nav__btn_currency" onClick={onToggle}>
          <TextRoboto className="text--big text--light -pr-4">
            {currency.symbol}
          </TextRoboto>
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

/** Export */
const mapStateToProps = (state) => ({
  currency: globalsSelectors.getCurrency(state),
});

const withRedux = connect(mapStateToProps);

export default withRedux(CurrencySwitcher);
