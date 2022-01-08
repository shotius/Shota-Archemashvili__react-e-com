import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//TEST_MODE

// Component will receive prop `ratio="width/height"`
export class AspectRatio extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    // if there are more then on child in the children throw an error
    if (this.ref.current.children.length !== 1) {
      throw Error('Aspect ratio expects one child');
    }

    // get the first child
    const innerEl = this.ref.current.children[0];

    // if maxWidth is not provided
    if (!this.props.maxWidth) {
      innerEl.style.maxWidth = '100%';
      innerEl.style.maxHeight = '100%';
    }

    // give content 100% width
    this.updateDimensions(innerEl);
    // update element on window resize
    window.addEventListener('resize', () => this.updateDimensions(innerEl));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions(element) {
    // update container dimensions
    this.ref.current.style.height = `${Math.round(
      this.ref.current.parentNode.clientWidth / this.props.ratio
    )}px`;

    element.style.maxWidth = '100%';
    element.style.height = '100%';
  }

  render() {
    const aspectClassName = classNames('aspect-ratio', {
      'aspect-ratio--full': this.props.maxWidth,
    });

    return (
      <div className={aspectClassName}>
        <div className="aspect-ratio__content" ref={this.ref}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

AspectRatio.propTypes = {
  ratio: PropTypes.number.isRequired,
  maxWidth: PropTypes.string,
};
