import { Component } from 'react';
import PropTypes from 'prop-types';
import { AspectRatio } from '../../../molecules/AspectRatio';
import { loadDefaultImage } from '../../../../utils/helpers';
import Image from '../../../atoms/Image/Image';
import productPageSliderUtils from './productPageSlider.utils';

const { shouldSelectedPictureBeUpdated } = productPageSliderUtils;

class ProductPageSlider extends Component {
  state = { selectedImage: null };

  componentDidUpdate() {
    const { thumbs } = this.props;
    const { selectedImage } = this.state;
    if (shouldSelectedPictureBeUpdated(thumbs, selectedImage)) {
      this.setState({ selectedImage: thumbs[0] });
    }
  }

  handleThumbClick(thumb) {
    this.setState({
      selectedImage: thumb,
    });
  }

  render() {
    const { selectedImage } = this.state;
    const { thumbs } = this.props;

    return (
      <div className="product-page__slider">
        <div className="product-page__slider__thumbs">
          {thumbs.map((thumb, i) => (
            <AspectRatio
              ratio={1}
              maxWidth="80px"
              key={`${thumb}${i}`}
              onClick={() => this.handleThumbClick(thumb)}
            >
              <img src={thumb} alt="slider thumb" onError={loadDefaultImage} />
            </AspectRatio>
          ))}
        </div>
        <div className="product-page__slider__img">
          {selectedImage && (
            <Image
              src={this.state.selectedImage}
              alt="slider main"
              fadeIn={true}
              speed="mouse"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          )}
        </div>
      </div>
    );
  }
}

ProductPageSlider.propTypes = {
  thumbs: PropTypes.array,
  selectedImage: PropTypes.string,
};

export default ProductPageSlider;
