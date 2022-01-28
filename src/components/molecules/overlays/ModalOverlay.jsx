import PropTypes from 'prop-types';
import { Component } from 'react';
import ReactDom from 'react-dom';
import { styleClasses } from './styleClasses';

// Modal overlay is defined int the portal
const modalOverlayRoot = document.getElementById('modal-portal');

export class ModalOverlay extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  // on the first load create element with plain javascript
  componentDidMount() {
    modalOverlayRoot.appendChild(this.el);
    this.el.onclick = this.props.cb;

    this.applyStylesToOverlay();
  }

  // on update overlay should get new props
  componentDidUpdate() {
    this.applyStylesToOverlay();
  }

  // remove child on unmount
  componentWillUnmount() {
    modalOverlayRoot.removeChild(this.el);
  }

  // update style classes on overlay
  applyStylesToOverlay = () => {
    const { modalOverlayClass } = styleClasses.call(this);
    this.el.className = modalOverlayClass;
  };

  // rendering react portal without childen
  render() {
    return ReactDom.createPortal(null, this.el);
  }
}

ModalOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isColored: PropTypes.bool,
  cb: PropTypes.func.isRequired,
};

ModalOverlay.defaultProps = {
  isColored: false,
};
