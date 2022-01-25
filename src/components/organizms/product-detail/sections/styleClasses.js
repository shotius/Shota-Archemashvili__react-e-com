import classNames from 'classnames';

export function styleClasses() {
  const { loadingProduct, loadingPartialProduct, descriptionExpanded } =
    this.props;
  const { selectedAttributes } = this.state;

  const productBrandClass = classNames('heading--main -pb-12', {
    'skeleton skeleton--header': loadingPartialProduct || loadingProduct,
  });

  const descriptionClass = classNames(
    'pr-details__description',
    'text--regular',
    {
      'pr-details__description--hidden': descriptionExpanded,
    }
  );

  const productNameClass = classNames('heading--secondary', {
    'skeleton skeleton--header': loadingProduct,
  });

  const descriptionExpandClass = classNames(
    'pr-details__description__btn--open-description',
    {
      'pr-details__description__btn--open-description--hidden': !(
        this.shouldDescriptionButtonBeVisible() && !descriptionExpanded
      ),
    }
  );

  const sizeButtonClass = ({ attributeName, value }) =>
    classNames('btn--outline', {
      'btn--outline--selected': selectedAttributes[attributeName] === value,
    });

  return {
    productBrandClass,
    descriptionClass,
    productNameClass,
    descriptionExpandClass,
    sizeButtonClass,
  };
}
