import { Component } from 'react';
import PropTypes from 'prop-types';
import { loadDefaultImage } from '../../../utils/helpers';
import classNames from 'classnames';
import imageUtils from './utils';
const { giveOpacity } = imageUtils;

class Image extends Component {
  onLoad = (e) => {
    const { fadeIn } = this.props;
    fadeIn && giveOpacity(e.target, '1');
  };

  onError = (e) => {
    const { fallbackSrc } = this.props;
    loadDefaultImage(e, fallbackSrc);
  };

  render() {
    const {
      alt,
      fallbackSrc,
      speed = 'mouse',
      fadeIn,
      className,
      ...rest
    } = this.props;

    const cn = classNames(
      { [`animation--easyload animation--easyload--${speed}`]: fadeIn },
      className
    );

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
