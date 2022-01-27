import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Component } from 'react';

class TextRegular extends Component {
  render() {
    const { className, children, ...rest } = this.props;
    const cn = classNames('text text--regular', className);

    return (
      <p className={cn} {...rest}>
        {children}
      </p>
    );
  }
}

TextRegular.propTypes = {
  className: PropTypes.string,
};

export default TextRegular;
