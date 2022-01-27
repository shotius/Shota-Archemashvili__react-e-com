import { Component } from 'react';
import classNames from 'classnames';

class TextRoboto extends Component {
  render() {
    const { className, children, ...rest } = this.props;
    const cn = classNames('text text--roboto', className);
    
    return (
      <p className={cn} {...rest}>
        {children}
      </p>
    );
  }
}

TextRoboto.propTypes = {};

export default TextRoboto;
