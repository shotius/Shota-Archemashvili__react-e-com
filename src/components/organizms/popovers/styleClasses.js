import classNames from 'classnames';

export function styleClasses() {
  const { isOpen } = this.props;

  const basketPopoverClass = classNames('basket-popover', {
    'basket-popover--opened': isOpen,
  });

  const currencyPopoverBody = classNames('popover-body', '-zIndex-modal', {
    'popover-body--opened': isOpen,
  });

  return {
    basketPopoverClass,
    currencyPopoverBody,
  };
}
