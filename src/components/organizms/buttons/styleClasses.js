import classNames from 'classnames';

export function styleClasses() {
  const basketClass = classNames('text--regular nav__btn-basket');

  const getBadgeClass = (totalProducts) =>
    classNames('nav__btn-basket__badge', {
      '-hidden': !totalProducts,
    });

  return {
    basketClass,
    getBadgeClass,
  };
}
