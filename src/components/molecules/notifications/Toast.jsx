import { Component } from 'react';
import PropTypes from 'prop-types';

class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {};

  render() {
    const { title } = this.props;
    return <div>{title}</div>;
  }
}

Toast.propTypes = {
  title: PropTypes.string,
  duration: PropTypes.number,
};

export default Toast;
