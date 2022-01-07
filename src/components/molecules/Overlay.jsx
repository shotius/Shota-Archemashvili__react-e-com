import { Component } from 'react';
import PropTypes from 'prop-types';

export class PopoverOverlay extends Component {
  render() {
    const { isOpen, cb, isColored } = this.props;
    return (
      <div
        className={`${isOpen && 'overlay'} ${isColored && 'overlay--gray'}`}
        onClick={cb}
      />
    );
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
