import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ErrorText extends Component {
  render() {
    const { children, className, ...rest } = this.props;
    const cn = classNames('text text--error', className);
    
    return (
      <p className={cn} {...rest}>
        {children}
      </p>
    );
  }
}

ErrorText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default ErrorText;
