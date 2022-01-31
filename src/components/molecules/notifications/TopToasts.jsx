import { Component } from 'react';
import PropTypes from 'prop-types';
import Toast from './Toast';

class TopToasts extends Component {
  render() {
    const { toasts } = this.props;
    return (
      <div className="toast-container toast-container--top">
        {toasts.map(
          (toast) =>
            toast.position === 'top' && (
              <Toast key={toast.id} toast={toast} />
            )
        )}
      </div>
    );
  }
}

TopToasts.propTypes = {};

export default TopToasts;
