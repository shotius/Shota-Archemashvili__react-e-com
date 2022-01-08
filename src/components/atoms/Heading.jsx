import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Heading extends Component {
  render() {
    const className = classNames('heading', this.props.className);
    return <h1 className={className}>{this.props.children}</h1>;
  }
}

Heading.propTypes = {
  className: PropTypes.string,
};
