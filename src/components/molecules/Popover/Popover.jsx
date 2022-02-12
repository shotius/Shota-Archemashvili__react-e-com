import { Component } from 'react';
import { styleClasses } from './styleClasses';

class Popover extends Component {
  render() {
    const { children, className, ...rest } = this.props;
    const { popoverClass } = styleClasses.call(this);
    return (
      <div className={popoverClass} {...rest}>
        {children}
      </div>
    );
  }
}

Popover.propTypes = {};

export default Popover;
