import { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class NavButton extends Component {
  render() {
    const { to, children, ...rest } = this.props;
    return (
      <NavLink
        title={children}
        className="nav__btn"
        activeClassName="nav__btn--active"
        to={to}
        {...rest}
      >
        {children}
      </NavLink>
    );
  }
}

NavButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default NavButton;
