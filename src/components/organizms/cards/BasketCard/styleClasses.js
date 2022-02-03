import classNames from 'classnames';

export function styleClasses() {
  const { size } = this.props;

  const cardClass = classNames('basket_popover__card', {
    'basket_popover__card--big': size === 'big',
  });

  const attrubuteBtnClass = classNames('btn--outline', {
    'btn--small': size === 'small',
  });

  const brandNameClass = classNames({
    'heading heading--secondary heading--semi-bold': size === 'big',
    '-display-none': size === 'small',
  });

  const priceClass = classNames({
    '-pt-3': size === 'small',
    '-pt-12': size === 'big',
  });

  return {
    attrubuteBtnClass,
    brandNameClass,
    priceClass,
    cardClass,
  };
}
