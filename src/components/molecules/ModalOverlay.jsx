import { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

// Modal overlay is defined int the portal
const modalOverlayRoot = document.getElementById('modal-overlay');

export class ModalOverlay extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  // on the first load create element with plain javascript
  componentDidMount() {
    modalOverlayRoot.appendChild(this.el);
    this.el.onclick = this.props.cb;
    this.el.className = `${this.props.isOpen && 'overlay'} ${
      this.props.isColored && 'overlay--gray'
    }`;
  }

  // on update overlay should get new props
  componentDidUpdate() {
    this.el.className = `${this.props.isOpen && 'overlay'} ${
      this.props.isColored && 'overlay--gray'
    }`;
  }

  // remove child on unmount
  componentWillUnmount() {
    modalOverlayRoot.removeChild(this.el);
  }

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
