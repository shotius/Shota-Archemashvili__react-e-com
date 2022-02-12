import { CATALOG_ROUTE } from '../../../../config/constants';

const getDefaultAttributesFromProduct = (attributes) => {
  const res = {};
  // Get first attributes
  for (let attr of attributes) {
    res[attr.id] = attr.items[0].value;
  }
  return res;
};

function setDefaultAttributes() {
  const { product } = this.props;
  this.setState({
    defaultSelectedAttributes: getDefaultAttributesFromProduct(
      product.attributes
    ),
  });
}

function handleMouseOver() {
  this.setState({
    isHovered: true,
  });
}

function handleMouseOut() {
  this.setState({
    isHovered: false,
  });
}

function handleNavigation() {
  const { id, category } = this.props.product;
  this.props.history.push(`${CATALOG_ROUTE}/${category}/${id}`);
}

const catalogCardUtils = {
  getDefaultAttributesFromProduct,
  setDefaultAttributes,
  handleMouseOver,
  handleMouseOut,
  handleNavigation,
};

export default catalogCardUtils;
