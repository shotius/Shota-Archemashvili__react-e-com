import { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../atoms/Heading';
import { Button } from '../atoms/buttons/Button';
import classNames from 'classnames';

class ProductPageMoreDeatails extends Component {
  render() {
    const { descriptionVisible, product, toggleDescription } = this.props;

    const containerClass = classNames({ '-hidden': !descriptionVisible });

    return (
      <div>
        <div className={containerClass}>
          <Heading className="heading--secondary -pt-48">Description</Heading>
          {product && (
            <div
              className="text--regular"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          )}

          <Button onClick={toggleDescription} className="-w-full">
            show less
          </Button>
        </div>
        <Heading className="heading--secondary -pt-48">Attribute name</Heading>
        <div className='text--regular'>description</div>
      </div>
    );
  }
}

ProductPageMoreDeatails.propTypes = {
  descriptionVisible: PropTypes.bool.isRequired,
  toggleDescription: PropTypes.func.isRequired,
  product: PropTypes.any,
};

export default ProductPageMoreDeatails;
