import { Component } from 'react';
import icon from '../../assets/icons/shoppingIcon.svg';

export class PageHeader extends Component {
  render() {
    return (
      <div className="header -center">
        <div className="page_wrap_out -justify-between -position-relative">
          <div className="-justify-between nav">
            <button className=" nav__btn--active nav__btn  btn">woman</button>
            <button className="btn nav__btn">men</button>
            <button className="btn nav__btn">kids</button>
          </div>
          <div className="-position-absolute -center-absolute btn__shopping">
            <img src={icon} alt="button for shopping" />
          </div>
          <div className="-justify-between">
            <div className="text__regular -mx-10">$</div>
            <p className="text__regular">basket</p>
          </div>
        </div>
      </div>
    );
  }
}
