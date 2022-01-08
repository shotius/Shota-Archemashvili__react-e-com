import { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../../atoms/Heading';
import { AspectRatio } from '../../molecules/AspectRatio';

export class CatalogCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="catalog-card">
        <div className="v-stack v-stack--spacing-20">
          <AspectRatio ratio={356 / 338}>
          {/* <div
            style={{
              maxWidth: '356px',
              maxHeight: '338px',
              width: '100%',
              display: 'flex',
            }}
          > */}
            <img
              src={product.picture}
              alt="card pic"
              style={{ height: '100%' }}
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
