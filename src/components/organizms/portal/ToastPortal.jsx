import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import toastUtils from './toastUtils';
import { connect } from 'react-redux';
import { removeToast } from '../../../redux/features/globalState/globalSlice';
import Toast from '../../molecules/notifications/Toast';

const { getRightPortal, removePortal, hasToastCreated, createPortal } =
  toastUtils;

class ToastPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      portalTop: null,
      portalBottom: null,
      portalTopRight: null,
    };
  }

  // create toast portal on mount
  componentDidMount = () => {
    const portalTop = createPortal('toast-portal--top');
    const portalBottom = createPortal('toast-portal--bottom');
    const portalTopRight = createPortal('toast-portal--top-right');
    this.setState({ portalTop, portalBottom, portalTopRight, loaded: true });
  };

  componentDidUpdate(prevProps) {
    const toasts = this.props.toasts;
    const lastToasts = prevProps.toasts;
    // check if toast added
    if (hasToastCreated(lastToasts, toasts)) {
      const lastToast = toasts[toasts.length - 1];
      // remove last added toast after timout
      setTimeout(() => {
        this.props.removeToast(lastToast.id);
      }, lastToast.duration);
    }
  }

  // remove portals on unmount
  componentWillUnmount = () => {
    removePortal(this.state.portalTop);
    removePortal(this.state.portalBottom);
    removePortal(this.state.portalTopRight);
  };

  render() {
    const { portalTop, loaded } = this.state;
    const { toasts } = this.props;

    if (!loaded) {
      return <></>;
    }

    // if (toasts.length) {
    //   return toasts.map((toast) => {
    //     return ReactDOM.createPortal(
    //       <div className="toast-container">
    //         <Toast key={toast.id} toast={toast} />
    //       </div>,
    //       getRightPortal.call(this, toast) // get right portal dependint on the toast position
    //     );
    //   });
    // }

    return ReactDOM.createPortal(
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} />
        ))}
      </div>,
      this.state.portalTop
    );

    // return nothing
    return ReactDOM.createPortal(null, portalTop);
  }
}

ToastPortal.propTypes = {};

const mapStateToProps = (state) => ({
  toasts: state.globals.toasts,
});

const withRedux = connect(mapStateToProps, { removeToast });

export default withRedux(ToastPortal);
