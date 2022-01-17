import { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../atoms/Heading';
import { Button } from '../atoms/buttons/Button';
import classNames from 'classnames';

class ProductPageMoreDeatails extends Component {
  render() {
    const { descriptionVisible, description, toggleDescription } = this.props;

    const containerClass = classNames({ '-hidden': !descriptionVisible });
    return (
      <div className={containerClass}>
        <Heading className="heading--secondary -pt-48">Description</Heading>
        {description && (
          <div
            className="text--regular"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}

        <Button onClick={toggleDescription} className="-w-full">
          show less
        </Button>
      </div>
    );
  }
}

ProductPageMoreDeatails.propTypes = {
  descriptionVisible: PropTypes.bool.isRequired,
  toggleDescription: PropTypes.func.isRequired,
  description: PropTypes.string,
};

export default ProductPageMoreDeatails;
