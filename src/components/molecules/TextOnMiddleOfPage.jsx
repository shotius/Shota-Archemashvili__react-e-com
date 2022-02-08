import { Component } from 'react';

class TextOnMiddleOfPage extends Component {
  render() {
    return <div className="content-middle-of-page">{this.props.children}</div>;
  }
}

export default TextOnMiddleOfPage;
