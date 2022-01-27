import classNames from 'classnames';

export function styleClasses() {
  const { isOpen } = this.props;

  const basketPopoverClass = classNames('basket_popover', {
    'basket_popover--opened': isOpen,
  });

  return {
    basketPopoverClass,
  };
}
