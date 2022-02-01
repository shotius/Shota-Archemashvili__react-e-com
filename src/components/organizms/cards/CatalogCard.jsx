import PropTypes from 'prop-types';
import { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import basketIcon from '../../../assets/icons/basketLarge.svg';
import { CATALOG_ROUTE } from '../../../config/constants';
import { getCurrencyIcon } from '../../../utils/getCurrencyIcon';
import { selectPrice } from '../../../utils/selectPrice';
import { Button } from '../../atoms/buttons/Button';
import { Heading } from '../../atoms/typography/Heading';
import { AspectRatio } from '../../molecules/AspectRatio';
import { styleClasses } from './styleClasses';

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
    const { id, category } = this.props.product;
    this.props.history.push(`${CATALOG_ROUTE}/${category}/${id}`);
  }

  render() {
    const { product, currency } = this.props;

    // choose correct price from price array
    const price = selectPrice(product.prices, currency);

    // css classes
    const { imgClassName, catalogWrapperClass, bsktBtnClass, overlayClass } =
      styleClasses.call(this);

    return (
      <div className="catalog-card">
        <div className={overlayClass}>
          <Heading className="heading--secondary -color--black">
            Out of Stock
          </Heading>
        </div>
        <div
          className={catalogWrapperClass}
          ref={this.ref}
          onClick={this.handleNavigation}
          onMouseEnter={this.handleMouseOver}
          onMouseLeave={this.handleMouseOut}
        >
          <div className="v-stack v-stack--spacing-20">
            <div className="catalog-card__picture-container">
              <AspectRatio ratio={356 / 338} maxWidth="350px">
                <img
                  src={product.gallery[0]}
                  alt="card pic"
                  className={imgClassName}
                  width="100%"
                />
              </AspectRatio>
              <Button className={bsktBtnClass}>
                <img src={basketIcon} alt="add to basket" />
              </Button>
            </div>
            <div className="catalog-card__description">
              <Heading className="catalog-card__heading">
                {product.name}
              </Heading>
              <Heading className="catalog-card__price">
                {getCurrencyIcon(currency)}
                {price}
              </Heading>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CatalogCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    gallery: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    prices: PropTypes.arrayOf(
      PropTypes.shape({
        currency: PropTypes.string,
        amount: PropTypes.number,
      })
    ),
    inStock: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  currency: state.globals.currency,
});
const withRedux = connect(mapStateToProps);

const enhance = compose(withRouter, withRedux);

export default enhance(CatalogCard);
