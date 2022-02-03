import classNames from 'classnames';
import React, { Component } from 'react';

export default class HeadingSecondary extends Component {
  render() {
    const { children, className, ...rest } = this.props;
    const cn = classNames('heading heading--secondary', className);
    
    return (
      <h1 className={cn} {...rest}>
        {children}
      </h1>
    );
  }
}
