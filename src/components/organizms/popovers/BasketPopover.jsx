import PropTypes from 'prop-types';
import { Component } from 'react';
import TextRoboto from '../../atoms/typography/TextRoboto';
import TextRegular from '../../atoms/typography/TextRegular';
import { ModalOverlay } from '../../molecules/overlays/ModalOverlay';
import { PopoverOverlay } from '../../molecules/overlays/Overlay';
import BasketPopoverCard from '../cards/BasketPopoverCard';
import { styleClasses } from './styleClasses';
import { Button } from '../../atoms/buttons/Button';

export class BasketPopover extends Component {
  render() {
    const { isOpen, onClose } = this.props;
    const { basketPopoverClass } = styleClasses.call(this);

    return (
      <>
        <PopoverOverlay cb={onClose} isOpen={isOpen} isColored={false} />
        <ModalOverlay cb={onClose} isOpen={isOpen} isColored={true} />
        <div className={basketPopoverClass}>
          {/* heading  */}
          <TextRegular>
            <b>My bag, </b>2 items
          </TextRegular>

          {/* Cards  */}
          <div className='basket_popover__cards'>
            {/* <BasketPopoverCard image="https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg" /> */}
            <BasketPopoverCard image="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087" />
            <BasketPopoverCard image="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087" />
          </div>

          <div className="basket_popover__total-price">
            <TextRoboto className="text--regular text--semi-bold">
              Total:
            </TextRoboto>
            <TextRegular className="text--bold">$100</TextRegular>
          </div>

          {/* Basket Button */}
          <div className="-flex -justify-between">
            <Button className="btn--outline">View Bag</Button>
            <Button className="btn--primary">Check Out</Button>
          </div>
        </div>
      </>
    );
  }
}

BasketPopover.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
