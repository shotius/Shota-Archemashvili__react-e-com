import { Component } from 'react';
import PropTypes from 'prop-types';
import Toast from './Toast';

class BottomToasts extends Component {
  render() {
    const { toasts } = this.props;
    return (
      <div className="toast-container toast-container--bottom">
        {toasts.map(
          (toast) =>
            toast.position === 'bottom' && (
              <Toast key={toast.id} toast={toast} />
            )
        )}
      </div>
    );
  }
}

BottomToasts.propTypes = {};

export default BottomToasts;
