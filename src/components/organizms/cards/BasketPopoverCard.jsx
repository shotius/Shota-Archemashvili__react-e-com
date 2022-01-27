import { Component } from 'react';
import TextRegular from '../../atoms/typography/TextRegular';
import PropTypes from 'prop-types';
import TextMain from '../../atoms/typography/TextMain';
import { Button } from '../../atoms/buttons/Button';

class BasketPopoverCard extends Component {
  render() {
    return (
      <div className="basket_popover__card">
        {/* Description  */}
        <div className="v-stack basket_popover__description">
          <TextRegular>Apollo Running Shorts</TextRegular>
          <TextMain>$50</TextMain>
          <div className="-flex -gap-8">
            <Button className="btn--outline btn--small">S</Button>
            <Button className="btn--outline btn--small">m</Button>
          </div>
        </div>

        {/* Add remove item  */}
        <div className="basket_popover__controls">
          <Button className="btn--outline btn--small basket_popover__plus">
            +
          </Button>
          <TextRegular>1</TextRegular>
          <Button className="btn--outline btn--small basket_popover__minus">
            -
          </Button>
        </div>

        {/* Picture  */}
        <div>
          <img
            src={this.props.image}
            alt="product"
            height="100%"
            width="105px"
          />
        </div>
      </div>
    );
  }
}

BasketPopoverCard.propTypes = {
  image: PropTypes.string,
};

export default BasketPopoverCard;
