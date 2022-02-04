import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { styleClasses } from './stylesClasses';

class CartAttributeButton extends Component {
  render() {
    const { size, children, className, ...rest } = this.props;
    const { attrubuteBtnClass } = styleClasses.call(this);

    const isSwatch = children[0] === '#';

    return (
      <Button
        className={attrubuteBtnClass}
        style={{
          backgroundColor: isSwatch && children,
        }}
        {...rest}
      >
        {!isSwatch && children}
      </Button>
    );
  }
}

CartAttributeButton.propTypes = {
  size: PropTypes.oneOf(['big', 'small']),
};

export default CartAttributeButton;
