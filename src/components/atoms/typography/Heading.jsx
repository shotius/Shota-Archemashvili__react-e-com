import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Heading extends Component {
  render() {
    const { children, className, ...rest } = this.props;
    const cn = classNames('heading', className);
    return (
      <h1 className={cn} {...rest}>
        {children}
      </h1>
    );
  }
}

Heading.propTypes = {
  className: PropTypes.string,
};
