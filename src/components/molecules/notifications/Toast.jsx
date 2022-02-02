import classNames from 'classnames';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { removeToast } from '../../../redux/features/globalState/globalSlice';
import TextMain from '../../atoms/typography/TextMain';

class Toast extends PureComponent {
  render() {
    const { toast, removeToast, className } = this.props;
    const cn = classNames('toast', `toast--${toast.status}`, className);

    return (
      <div className={cn} onClick={() => removeToast(toast.id)}>
        <TextMain>{toast.title} </TextMain>
      </div>
    );
  }
}

Toast.propTypes = {
  toast: PropTypes.any,
};

const withRedux = connect(null, { removeToast });

export default withRedux(Toast);
