import { Component } from 'react';
import PropTypes from 'prop-types';
import Toast from './Toast';

class ToastTopLeft extends Component {
  render() {
    const { toasts } = this.props;
    return (
      <div className="toast-container toast-container--top-left">
        {toasts.map(
          (toast) =>
            toast.position === 'top-left' && (
              <Toast key={toast.id} toast={toast} />
            )
        )}
      </div>
    );
  }
}

ToastTopLeft.propTypes = {};

export default ToastTopLeft;
