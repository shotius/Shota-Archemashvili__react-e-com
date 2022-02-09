import classNames from 'classnames';

export function styleClasses() {
  const { size, gallery } = this.props;
  const pictureContainer = classNames('page-cart__picture-container', [
    `page-cart__picture-container--${size}`,
  ]);

  const navigationContainer = classNames(
    'page-cart__picture-container__navigation',
    { '-display-none': size === 'small' || gallery.length <= 1 }
  );

  return {
    pictureContainer,
    navigationContainer,
  };
}
