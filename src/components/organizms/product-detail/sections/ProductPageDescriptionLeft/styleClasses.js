import classNames from 'classnames';

export function styleClasses() {
  const { loadingProduct, loadingPartialProduct, product } = this.props;

  const productBrandClass = classNames('heading--main -pb-12', {
    'skeleton skeleton--header': loadingPartialProduct || loadingProduct,
  });

  const descriptionClass = classNames(
    'pr-details__description',
    'text--regular '
  );

  const productNameClass = classNames('heading--secondary', {
    'skeleton skeleton--header': loadingProduct,
  });

  const buttonSubmitClass = classNames('btn--primary', {
    'btn--disabled': !product.inStock,
  });

  return {
    productBrandClass,
    descriptionClass,
    productNameClass,
    buttonSubmitClass,
  };
}
