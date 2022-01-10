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

    // get the first child in aspect ratio
    const innerEl = this.ref.current.children[0];

    // if maxWidth is not provided
    if (!this.props.maxWidth) {
      innerEl.style.maxWidth = '100%';
      innerEl.style.maxHeight = '100%';
    } else {
      this.ref.current.style.height = this.props.maxWidth;
      this.ref.current.style.width = this.props.maxWidth;
    }

    // give content 100% width
    this.updateDimensions(innerEl);
    // update element on window resize
    window.addEventListener('resize', () => this.updateDimensions(innerEl));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  /** Function sets dimannsions to the proveded element */
  updateDimensions(element) {
    // update content wrapper container dimensions if maxWidth is not specified
    // otherwise it will rewrite maxWidth dimension
    if (!this.props.maxWidth) {
      this.ref.current.style.height = `${Math.round(
        this.ref.current.parentNode.clientWidth / this.props.ratio
      )}px`;
    }

    // if there is an image in the aspect ratio
    if (element.tagName === 'IMG') {
      this.setImageDimensions(element);
    } else {
      // else just width and height
      element.style.width = '100%';
      element.style.height = '100%';
    }
  }

  /** Function waits to the image load and assignes dimensions */
  setImageDimensions(img) {
    // wait to load event to have a natural sizes
    img.onload = () => {
      const naturalRatio = img.naturalWidth / img.naturalHeight;

      // if image is just long then it is expected, crop the bottom to fit in the div
      if (this.props.ratio > naturalRatio * 1.4) {
        img.style.maxHeight = 'none';
        img.style.height = 'auto';
        img.style.width = '100%';
      } else if (this.props.ratio < naturalRatio * 1.4) {
        // if the image ratio  is wider when it is expected fit it
        img.style.height = '100%';
        img.style.maxWidth = 'none';
        img.style.width = 'auto';
      } else {
        // else if image natural ratio is bias to to our ration fit in the aspect ratio
        img.style.width = '100%';
        img.style.height = '100%';
      }
    };
  }

  render() {
    const { maxWidth, ...rest } = this.props;

    // console.log('aspectProps: ', rest)
    const aspectClassName = classNames('aspect-ratio', {
      'aspect-ratio--full': maxWidth,
    });

    return (
      <div className={aspectClassName} {...rest}>
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
