import { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class NavButton extends Component {
  render() {
    const to = this.props.to;
    return (
      <NavLink
        title={this.props.children}
        className="nav__btn"
        activeClassName="nav__btn--active"
        to={to}
      >
        {this.props.children}
      </NavLink>
    );
  }
}

NavButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default NavButton;
