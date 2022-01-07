import { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export class PopoverOverlay extends Component {
  render() {
    const { isOpen, cb, isColored } = this.props;

    const className = cn({
      overlay: isOpen,
      'overlay--gray': isColored,
    });

    return <div className={className} onClick={cb} />;
  }
}

PopoverOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  cb: PropTypes.func.isRequired,
  isColored: PropTypes.bool,
};

PopoverOverlay.defaultProps = {
  isColored: false,
};
