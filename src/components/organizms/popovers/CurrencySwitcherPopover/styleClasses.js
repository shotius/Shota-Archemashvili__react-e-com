import classNames from 'classnames';

export function styleClasses() {
  const { isOpen } = this.props;

  const dropdownClass = classNames('nav__btn_dropdown', {
    'nav__btn_dropdown--opened': isOpen,
  });

  return {
    dropdownClass,
  };
}
