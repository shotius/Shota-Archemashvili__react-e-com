import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import imageUtils from './image.utils';
import { styleClasses } from './styleClasses';
const { setOpacity, loadDefaultImage } = imageUtils;

class Image extends PureComponent {
  onLoad = (e) => {
    const { fadeIn } = this.props;
    fadeIn && setOpacity(e.target, '1');
  };

  onError = (e) => {
    const { fallbackSrc } = this.props;
    loadDefaultImage(e, fallbackSrc);
  };

  render() {
    const { alt, fallbackSrc, fadeIn, className, ...rest } = this.props;

    const { cn } = styleClasses.call(this);

    return (
      <img
        onLoad={this.onLoad}
        alt={alt}
        className={cn}
        onError={this.onError}
        {...rest}
      />
    );
  }
}

Image.propTypes = {
  fadeIn: PropTypes.bool,
  speed: PropTypes.oneOf(['mouse', 'rabbit', 'leopard', 'snile']),
};

export default Image;
