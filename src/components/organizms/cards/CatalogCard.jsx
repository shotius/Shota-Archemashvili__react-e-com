import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../../atoms/Heading';
import { AspectRatio } from '../../molecules/AspectRatio';
import classNames from 'classnames';

export class CatalogCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    this.cardRef = createRef();
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver() {
    this.setState({
      isHovered: true,
    });
  }

  handleMouseOut() {
    console.log('out');
    this.setState({
      isHovered: false,
    });
  }

  render() {
    const { product } = this.props;

    const imgClassName = classNames('catalog-card__pic', {
      'catalog-card__pic--hovered': this.state.isHovered,
    });

    return (
      <div
        className="catalog-card"
        ref={this.ref}
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseOut}
      >
        <div className="v-stack v-stack--spacing-20">
          <AspectRatio ratio={356 / 338}>
          {/* <div className="catalog-card__price-container"> */}
            <img
              src={product.picture}
              alt="card pic"
              className={imgClassName}
              width="100%"
              
            />
          {/* </div> */}
          </AspectRatio>
          <div className="catalog-card__description">
            <Heading className="catalog-card__heading">{product.title}</Heading>
            <Heading className="catalog-card__price">
              ${product.price && product.price.toFixed(2)}
            </Heading>
          </div>
        </div>
      </div>
    );
  }
}

CatalogCard.propTypes = {
  product: PropTypes.shape({
    picture: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
