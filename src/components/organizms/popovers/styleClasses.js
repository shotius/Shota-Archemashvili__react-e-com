import classNames from 'classnames';

export function styleClasses() {
  const { isOpen } = this.props;

  const basketPopoverClass = classNames('basket_popover', {
    'basket_popover--opened': isOpen,
  });

  const popoverContainer = classNames('currency_popover', '-zIndex-modal', {
    'currency_popover--opened': isOpen,
  });

  return {
    basketPopoverClass,
    popoverContainer,
  };
}
