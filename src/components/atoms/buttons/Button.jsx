import { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { isPressed: false, isHovered: false };
  }

  render() {
    const { isHovered, isPressed } = this.state;
    const { onClick, style, className, ...rest } = this.props;

    const btnClass = cn(
      'btn',
      this.props.className,
      {
        '--pressed': isPressed,
        '--over': isHovered,
      },
      className
    );

    return (
      <button className={btnClass} onClick={onClick} style={style} {...rest}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  isPressed: PropTypes.bool,
  isHovered: PropTypes.bool,
  classname: PropTypes.string,
};
