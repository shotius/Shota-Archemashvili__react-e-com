import classNames from 'classnames';

export function styleClasses() {
  const { isOpen, className } = this.props;

  const popoverBodyClass = classNames(
    'popover-body',
    { 'popover-body--opened': isOpen },
    className
  );

  const popoverClass = classNames('popoover-container', className);

  return {
    popoverBodyClass,
    popoverClass,
  };
}
