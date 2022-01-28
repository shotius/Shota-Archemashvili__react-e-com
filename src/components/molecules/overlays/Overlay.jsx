import { Component } from 'react';
import PropTypes from 'prop-types';
import { styleClasses } from './styleClasses';

export class PopoverOverlay extends Component {
  render() {
    const { popoverOverlayClass } = styleClasses.call(this);
    return <div className={popoverOverlayClass} onClick={this.props.cb} />;
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
