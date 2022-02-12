import { Component } from 'react';

class PopoverTrigger extends Component {
  render() {
    return <div className="popover-trigger">{this.props.children}</div>;
  }
}

PopoverTrigger.propTypes = {};

export default PopoverTrigger;
