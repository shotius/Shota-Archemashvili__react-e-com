import classNames from 'classnames';

export function styleClasses() {
  const { loadingProduct, loadingPartialProduct } = this.props;

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

  return {
    productBrandClass,
    descriptionClass,
    productNameClass,
  };
}
