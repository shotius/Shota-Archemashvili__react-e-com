import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../atoms/buttons/Button';
import arrowNext from '../../../../assets/icons/greaterThan.svg';
import arrowPrev from '../../../../assets/icons/lessThanArrow.svg';
import Image from '../../../atoms/Image/Image';
import { styleClasses } from './styleClasses';

class CartPageSlider extends Component {
  state = {
    activeSlide: 0,
  };

  handleNextSlide = () => {
    const { gallery } = this.props;
    const { activeSlide } = this.state;

    if (activeSlide === gallery.length - 1) {
      this.setState({ activeSlide: 0 });
    } else {
      this.setState({ activeSlide: activeSlide + 1 });
    }
  };

  handlePrevSlide = () => {
    const { gallery } = this.props;
    const { activeSlide } = this.state;

    if (activeSlide === 0) {
      this.setState({ activeSlide: gallery.length - 1 });
    } else {
      this.setState({ activeSlide: activeSlide - 1 });
    }
  };

  render() {
    const { gallery } = this.props;
    const { activeSlide } = this.state;

    const { pictureContainer, pictureContainerClass } = styleClasses.call(this);

    return (
      <div className={pictureContainer}>
        <Image src={gallery[activeSlide]} alt="product" />
        <div className={pictureContainerClass}>
          <Button
            className="page-cart__picture-container__btn-right"
            onClick={this.handleNextSlide}
          >
            <img src={arrowNext} alt="button next" />
          </Button>
          <Button
            className="page-cart__picture-container__btn-left"
            onClick={this.handlePrevSlide}
          >
            <img src={arrowPrev} alt="button next" />
          </Button>
        </div>
      </div>
    );
  }
}

CartPageSlider.propTypes = {
  size: PropTypes.oneOf(['small', 'big']),
  gallery: PropTypes.arrayOf(PropTypes.string),
};

export default CartPageSlider;
