import { Component } from 'react';
import PropTypes from 'prop-types';

class LodingText extends Component {
  render() {
    return <div className="skeleton" style={{ width: this.props.width }}></div>;
  }
}

LodingText.propTypes = {
  width: PropTypes.string,
};

LodingText.defaultProps = {
  width: '100%',
};

export default LodingText;
