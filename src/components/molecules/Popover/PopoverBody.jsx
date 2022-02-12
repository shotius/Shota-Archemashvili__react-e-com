import { Component } from 'react';
import PropTypes from 'prop-types';
import { styleClasses } from './styleClasses';

class PopoverBody extends Component {
  render() {
    const { children, className, isOpen, ...rest } = this.props;
    const { popoverBodyClass } = styleClasses.call(this);
    return (
      <div className={popoverBodyClass} {...rest}>
        {children}
      </div>
    );
  }
}

PopoverBody.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default PopoverBody;
