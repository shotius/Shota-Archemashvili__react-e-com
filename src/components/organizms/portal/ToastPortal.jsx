import { Component } from 'react';
import ReactDOM from 'react-dom';
import toastUtils from './toastUtils';
import { connect } from 'react-redux';
import { removeToast } from '../../../redux/features/globalState/globalSlice';
import Toasts from '../../molecules/notifications/Toasts';
import globalsSelectors from '../../../redux/features/globalState/globalsSelectors';

const { removePortal, hasToastCreated, createRootPortal } = toastUtils;

class ToastPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      rootPortal: null,
    };
  }

  // create toast portal on mount
  componentDidMount = () => {
    const rootPortal = createRootPortal();
    // createSubPortals();
    this.setState({ rootPortal, loaded: true });
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
    removePortal();
  };

  render() {
    const { loaded } = this.state;

    if (!loaded) {
      return <></>;
    }

    return ReactDOM.createPortal(<Toasts />, this.state.rootPortal);
  }
}

ToastPortal.propTypes = {};

const mapStateToProps = (state) => ({
  toasts: globalsSelectors.getToasts(state),
});

const withRedux = connect(mapStateToProps, { removeToast });

export default withRedux(ToastPortal);
