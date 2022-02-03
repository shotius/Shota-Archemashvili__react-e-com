import classNames from 'classnames';

export function styleClasses() {
  const { isHovered } = this.state;
  const { product } = this.props;

  const imgClassName = classNames('catalog-card__pic', {
    'catalog-card__pic--hovered': isHovered,
  });

  const bsktBtnClass = classNames('catalog-card__btn-basket', '-bg--green', {
    'catalog-card__btn-basket--visible': isHovered,
  });

  const overlayClass = classNames('catalog-card__out-of-stock-overlay', {
    'catalog-card__out-of-stock-overlay--active': !product.inStock,
  });

  const catalogWrapperClass = classNames('catalog-card__wrapper', {
    'catalog-card__wrapper--disabled': !product.inStock,
  });

  return {
    imgClassName,
    bsktBtnClass,
    overlayClass,
    catalogWrapperClass,
  };
}
