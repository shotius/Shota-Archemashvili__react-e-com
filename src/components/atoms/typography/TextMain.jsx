import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class TextMain extends Component {
  render() {
    const { children, className, ...rest } = this.props;
    const cn = classNames('text text--big', className);

    return (
      <p className={cn} {...rest}>
        {children}
      </p>
    );
  }
}

TextMain.propTypes = {
  classNames: PropTypes.string,
};

export default TextMain;
