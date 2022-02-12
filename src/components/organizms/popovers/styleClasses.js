import classNames from 'classnames';

export function styleClasses() {
  const { isOpen } = this.props;

  const basketPopoverClass = classNames('basket-popover', {
    'basket-popover--opened': isOpen,
  });

  const popoverContainer = classNames('currency_popover', '-zIndex-modal', {
    'currency_popover--opened': isOpen,
  });

  const categoryPopoverClass = classNames('category-popover', {
    'category-popover--opened': isOpen,
  });

  const dropdownClass = classNames('category-popover__dropdown', {
    'category-popover__dropdown--active': isOpen,
  });

  return {
    basketPopoverClass,
    popoverContainer,
    categoryPopoverClass,
    dropdownClass,
  };
}
