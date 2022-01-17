import { Component } from 'react';
import PropTypes from 'prop-types';
import { AspectRatio } from '../../molecules/AspectRatio';

class ProductPageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedImage: null };
  }

  componentDidUpdate() {
    const { thumbs } = this.props;
    const { selectedImage } = this.state;
    if (thumbs.length > 0 && !selectedImage) {
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
          {thumbs.slice(0, 5).map((thumb, i) => (
            <AspectRatio
              ratio={1}
              maxWidth="80px"
              key={`${thumb}${i}`}
              onClick={() => this.handleThumbClick(thumb)}
            >
              <img src={thumb} alt="slider thumb" />
            </AspectRatio>
          ))}
        </div>
        <div className="product-page__slider__img">
          {selectedImage && (
            <img
              src={this.state.selectedImage}
              alt="slider main"
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
