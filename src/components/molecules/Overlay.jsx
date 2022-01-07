import { Component } from 'react';
import PropTypes from 'prop-types';

export class PopoverOverlay extends Component {
  render() {
    const { isOpen, cb } = this.props;
    return <div className={`${isOpen && 'popover_overlay'}`} onClick={cb} />;
  }
}

PopoverOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  cb: PropTypes.func.isRequired,
};
