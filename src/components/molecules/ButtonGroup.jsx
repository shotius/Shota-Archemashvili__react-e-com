import { Component } from 'react';

export class ButtonGroup extends Component {
  render() {
    return <div className='header__btn_group'>{this.props.children}</div>;
  }
}
