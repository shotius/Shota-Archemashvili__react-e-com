import { Button } from '../../../atoms/buttons/Button';
import { styleClasses } from './styleClasses';

function getAttrButton(attr) {
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

function getPictureWidth(size) {
  switch (size) {
    case 'big':
      return '145px';
    default:
      return '105px';
  }
}

const basketPopoverCardUtils = {
  getAttrButton,
  getPictureWidth,
};

export default basketPopoverCardUtils;
