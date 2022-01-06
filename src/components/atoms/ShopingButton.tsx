import { Component } from 'react';
import icon from '../../assets/icons/shoppingIcon.svg';

export class ShoppingButton extends Component {
  render() {
    return (
      <div className="-position-absolute -center-absolute btn__shopping">
        <img src={icon} alt="shopping button" />
      </div>
    );
  }
}

export default ShoppingButton;
