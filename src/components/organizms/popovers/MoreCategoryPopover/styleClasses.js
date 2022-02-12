import classNames from 'classnames';

export function styleClasses() {
  const { categories, isOpen } = this.props;

  const categoryPopoverClass = classNames('category-popover', {
    'category-popover--hidden': !categories.length,
  });

  const dropdownClass = classNames('category-popover__dropdown', {
    'category-popover__dropdown--active': isOpen,
  });

  return {
    categoryPopoverClass,
    dropdownClass,
  };
}
