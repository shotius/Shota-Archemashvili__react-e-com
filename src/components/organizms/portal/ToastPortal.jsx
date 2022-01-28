import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import toastUtils from './toastUtils';
import { connect } from 'react-redux';
import { removeToast } from '../../../redux/features/globalState/globalSlice';

const { removePortal, createPortal } = toastUtils;

class ToastPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      portalDiv: null,
      toasts: [
        {
          title: 'this is a portal',
        },
        {
          title: 'this is a second portal',
        },
      ],
    };
  }

  // create toast portal on mount
  componentDidMount = () => {
    const portalDiv = createPortal();
    this.setState({ portalDiv, loaded: true });
  };

  componentDidUpdate(prevProps) {
    const toasts = this.props.toasts;
    const lastToasts = prevProps.toasts;
    if (lastToasts.length !== this.props.toasts.length && toasts.length) {
      console.log('toasts', this.props.toasts);
      const lastToast = toasts[toasts.length - 1];
      setTimeout(() => {
        this.props.removeToast(lastToast.id);
      }, lastToast.duration);
    }
  }

  // remove portal on unmount
  componentWillUnmount = () => {
    removePortal(this.state.portalDiv);
  };

  render() {
    const { portalDiv, loaded } = this.state;
    const { toasts } = this.props;

    if (!loaded) {
      return <></>;
    }

    return ReactDOM.createPortal(
      toasts.map((toast) => <div key={toast.id}>{toast.title}</div>),
      portalDiv
    );
  }
}

ToastPortal.propTypes = {};

const mapStateToProps = (state) => ({
  toasts: state.globals.toasts,
});

const withRedux = connect(mapStateToProps, { removeToast });

export default withRedux(ToastPortal);
