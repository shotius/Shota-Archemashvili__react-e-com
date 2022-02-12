import { Component } from 'react';
import classNames from 'classnames';

class VStack extends Component {
  render() {
    const { children, className, ...rest } = this.props;
    const cn = classNames('v-stack', className);
    return (
      <div className={cn} {...rest}>
        {children}
      </div>
    );
  }
}

VStack.propTypes = {};

export default VStack;
