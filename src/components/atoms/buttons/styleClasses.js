import classNames from 'classnames';

export const styleClasses = () => {
  const sizeButtonClass = ({ isSelected, isSwatch }) =>
    classNames('btn--outline', {
      'btn--outline--selected': isSelected,
      'btn--swatch': isSwatch,
    });

  return {
    sizeButtonClass,
  };
};
