import { Button } from '../../../atoms/buttons/Button';
import { styleClasses } from './styleClasses';

function getAttrButtonSmall(attr) {
  const { attributes } = this.props.product;
  const { attrubuteBtnClass } = styleClasses.call(this);

  switch (attr) {
    case 'Size':
      return (
        <Button className={attrubuteBtnClass} key={attr} display={'none'}>
          {attributes[attr]}
        </Button>
      );

    case 'Color':
      return (
        <Button
          className={attrubuteBtnClass}
          style={{ backgroundColor: attributes[attr] }}
          key={attr}
        />
      );
    default:
      return null;
  }
}

function getAttrButtonBig(attribute) {
  const { attrubuteBtnClass } = styleClasses.call(this);
  if (isYesOrNo(attribute)) {
    return <Button className={attrubuteBtnClass}>{attribute}</Button>;
  }
  return <Button className={attrubuteBtnClass}>{attribute}</Button>;
}

function handleEncrease() {
  const { product, decrease, setToast } = this.props;
  // if last one is removed from the cars show notification
  product.count === 1 &&
    setToast({
      title: `${product.name} removed from basket`,
      duration: 3000,
    });

  decrease(product);
}

function getAttributeButton(attr) {
  if (this.props.size === 'small') return this.getAttrButtonSmall(attr);
  return this.getAttrButtonBig(attr);
}

function getPictureWidth(size) {
  switch (size) {
    case 'big':
      return '145px';
    default:
      return '105px';
  }
}

function isYesOrNo(value) {
  return value === 'Yes' || value === 'No';
}

const basketPopoverCardUtils = {
  getAttrButtonSmall,
  getPictureWidth,
  isYesOrNo,
  getAttrButtonBig,
  getAttributeButton,
  handleEncrease,
};

export default basketPopoverCardUtils;
