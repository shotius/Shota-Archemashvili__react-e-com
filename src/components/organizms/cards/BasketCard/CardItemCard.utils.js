import AttributeButton from '../../../atoms/buttons/AttributeButton';
import { Button } from '../../../atoms/buttons/Button';
import { styleClasses } from './styleClasses';

function getAttrButtonSmall(attributes, attr) {
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
      return (
        <Button className={attrubuteBtnClass} key={attr} display={'none'}>
          {attr}
        </Button>
      );
  }
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

function getPictureWidth(size) {
  switch (size) {
    case 'big':
      return '145px';
    default:
      return '105px';
  }
}

function isYes(value) {
  return value === 'Yes';
}

function isYesOrNo(value) {
  return value === 'Yes' || value === 'No';
}

const basketPopoverCardUtils = {
  getAttrButtonSmall,
  getPictureWidth,
  isYesOrNo,
  isYes,
  handleEncrease,
};

export default basketPopoverCardUtils;
