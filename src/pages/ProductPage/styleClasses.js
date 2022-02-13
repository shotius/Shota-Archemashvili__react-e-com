import classNames from 'classnames';

export function styleClasses() {
  const { product } = this.state;

  const outOfStockClass = classNames('product-page__out-of-stock', {
    '-hidden': product && product.inStock,
  });

  return { outOfStockClass };
}
