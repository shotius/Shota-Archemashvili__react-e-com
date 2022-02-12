import classNames from 'classnames';

export function styleClasses() {
  const { isOpen } = this.props;

  const basketPopoverClass = classNames('basket-popover', {
    'basket-popover--opened': isOpen,
  });

  const currencyPopoverBody = classNames('popover-body', '-zIndex-modal', {
    'popover-body--opened': isOpen,
  });

  const categoryPopoverClass = classNames('category-popover', {
    'category-popover--opened': isOpen,
  });

  const dropdownClass = classNames('category-popover__dropdown', {
    'category-popover__dropdown--active': isOpen,
  });

  return {
    basketPopoverClass,
    currencyPopoverBody,
    categoryPopoverClass,
    dropdownClass,
  };
}
