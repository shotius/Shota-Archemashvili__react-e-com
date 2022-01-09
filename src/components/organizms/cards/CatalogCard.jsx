import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../../atoms/Heading';
import { AspectRatio } from '../../molecules/AspectRatio';
import classNames from 'classnames';
import basketIcon from '../../../assets/icons/basketLarge.svg';
import { Button } from '../../atoms/buttons/Button';
import { withNavigation } from '../../../utils/HOC/withNavigation';

class CatalogCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    this.cardRef = createRef();
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  handleMouseOver() {
    this.setState({
      isHovered: true,
    });
  }

  handleMouseOut() {
    this.setState({
      isHovered: false,
    });
  }

  handleNavigation() {
    const { id } = this.props.product;
    this.props.navigate(`/catalog/${id}`);
  }

  handleProductAddClick(e) {
    if (e.stopPropagation) e.stopPropagation();
    console.log('clicked');
  }

  render() {
    const { product } = this.props;

    const imgClassName = classNames('catalog-card__pic', {
      'catalog-card__pic--hovered': this.state.isHovered,
    });

    const bsktBtnClass = classNames('catalog-card__btn-basket', '-bg--green', {
      'catalog-card__btn-basket--visible': this.state.isHovered,
    });

    return (
      <div
        className="catalog-card"
        ref={this.ref}
        onClick={this.handleNavigation}
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseOut}
      >
        <div className="v-stack v-stack--spacing-20">
          <div className="catalog-card__picture-container">
            <AspectRatio ratio={356 / 338}>
              <img
                src={product.picture}
                alt="card pic"
                className={imgClassName}
                width="100%"
              />
            </AspectRatio>
            <Button
              className={bsktBtnClass}
              onClick={this.handleProductAddClick}
            >
              <img src={basketIcon} alt="add to basket" />
            </Button>
          </div>
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
    id: PropTypes.string,
    picture: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default withNavigation(CatalogCard);
