import { Component } from 'react';
import PropTypes from 'prop-types';
import { removeToast } from '../../../redux/features/globalState/globalSlice';
import { connect } from 'react-redux';
import TopToasts from './TopToasts';
import BottomToasts from './BottomToasts';
import ToastTopLeft from './ToastTopLeft';

class Toasts extends Component {
  render() {
    const { toasts } = this.props;

    return (
      <>
        <TopToasts toasts={toasts} />
        <BottomToasts toasts={toasts} />
        <ToastTopLeft toasts={toasts} />
      </>
    );
  }
}

Toasts.propTypes = {};

const mapStateToProps = (state) => ({
  toasts: state.globals.toasts,
});

const withRedux = connect(mapStateToProps, { removeToast });

export default withRedux(Toasts);
