import classNames from 'classnames';

export function styleClasses() {
  const { size } = this.props;
  const pictureContainer = classNames('page-cart__picture-container', [
    `page-cart__picture-container--${size}`,
  ]);

  const pictureContainerClass = classNames(
    'page-cart__picture-container__navigation',
    { '-display-none': size === 'small' }
  );

  return {
    pictureContainer,
    pictureContainerClass,
  };
}
