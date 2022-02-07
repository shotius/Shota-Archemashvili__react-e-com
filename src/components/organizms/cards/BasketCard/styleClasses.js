import classNames from 'classnames';

export function styleClasses() {
  const { size } = this.props;

  const cardClass = classNames('cart-item-card', {
    'cart-item-card--big': size === 'big',
    'cart-item-card--small': size === 'small',
  });

  const brandNameClass = classNames({
    'heading heading--secondary heading--semi-bold': size === 'big',
    'text text--regular': size === 'small',
  });

  const productNameClass = classNames({
    'heading heading--secondary': size === 'big',
    'text text--regular': size === 'small',
  });

  const priceClass = classNames({
    '-pt-3': size === 'small',
    '-pt-16 text--bold': size === 'big',
  });

  const attrubuteBtnClass = classNames('btn--outline', {
    '-py-0 -px-4': size === 'small',
  });

  const btnPlusClass = classNames(
    'btn--outline btn--small cart-item-card__plus',
    { 'btn--square-big cart-item-card__plus--big': size === 'big' }
  );

  const productCount = classNames({ 'text--big': size === 'big' });

  const btnMinusClass = classNames(
    'btn--outline btn--small cart-item-card__minus',
    { 'btn--square-big cart-item-card__minus--big': size === 'big' }
  );

  const pibtureContainer = classNames('page-cart__picture-container', [
    `page-cart__picture-container--${size}`,
  ]);

  return {
    attrubuteBtnClass,
    brandNameClass,
    priceClass,
    cardClass,
    btnMinusClass,
    btnPlusClass,
    productCount,
    productNameClass,
    pibtureContainer,
  };
}
