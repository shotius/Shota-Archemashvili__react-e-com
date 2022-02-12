import classNames from 'classnames';

export function styleClasses() {
  const { isOpen } = this.props;

  const basketPopoverClass = classNames('basket-popover', {
    'basket-popover--opened': isOpen,
  });

  const basketClass = classNames('text--regular nav__btn-basket');

  const getBadgeClass = (totalProducts) =>
    classNames('nav__btn-basket__badge', {
      '-hidden': !totalProducts,
    });

  return {
    basketPopoverClass,
    basketClass,
    getBadgeClass,
  };
}
