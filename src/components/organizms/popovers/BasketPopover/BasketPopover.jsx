import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import basketIcon from '../../../../assets/icons/basketIcon.svg';
import basketSelectors from '../../../../redux/features/basket/basketSelectors';
import { Button } from '../../../atoms/buttons/Button';
import { ModalOverlay } from '../../../molecules/overlays/ModalOverlay';
import { PopoverOverlay } from '../../../molecules/overlays/Overlay';
import Popover from '../../../molecules/Popover/Popover';
import PopoverBody from '../../../molecules/Popover/PopoverBody';
import PopoverTrigger from '../../../molecules/Popover/PopoverTrigger';
import BasketPopoverContent from './BasketPopoverContent';
import { styleClasses } from './styleClasses';

class BasketPopover extends Component {
  render() {
    const { isOpen, onToggle, totalProducts } = this.props;

    const { getBadgeClass, basketClass } = styleClasses.call(this);

    return (
      <Popover className="basket-popover">
        <PopoverOverlay cb={onToggle} isOpen={isOpen} isColored={false} />
        <ModalOverlay cb={onToggle} isOpen={isOpen} isColored={true} />

        <PopoverTrigger>
          <Button className={basketClass} onClick={onToggle}>
            <img src={basketIcon} alt="basket icon" />
            <div className={getBadgeClass(totalProducts)}>
              <p>{totalProducts}</p>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverBody isOpen={isOpen}>
          <BasketPopoverContent onClose={onToggle} isOpen={isOpen} />
        </PopoverBody>
      </Popover>
    );
  }
}

BasketPopover.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

/** Export */
const mapStateToProps = (state) => ({
  products: basketSelectors.getProducts(state),
  totalProducts: basketSelectors.getTotalProducts(state),
});

const withRedux = connect(mapStateToProps);

export default withRedux(BasketPopover);
