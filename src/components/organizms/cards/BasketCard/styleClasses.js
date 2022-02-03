import classNames from 'classnames';

export function styleClasses() {
  const { size } = this.props;

  const cardClass = classNames('basket_popover__card', {
    'basket_popover__card--big': size === 'big',
  });

  const brandNameClass = classNames({
    'heading heading--secondary heading--semi-bold': size === 'big',
    '-display-none': size === 'small',
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
    'btn--small': size === 'small',
  });

  const btnPlusClass = classNames(
    'btn--outline btn--small basket_popover__plus',
    { 'btn--square-big': size === 'big' }
  );

  const productCount = classNames({ 'text--big': size === 'big' });

  const btnMinusClass = classNames(
    'btn--outline btn--small basket_popover__minus',
    { 'btn--square-big': size === 'big' }
  );

  return {
    attrubuteBtnClass,
    brandNameClass,
    priceClass,
    cardClass,
    btnMinusClass,
    btnPlusClass,
    productCount,
    productNameClass,
  };
}
