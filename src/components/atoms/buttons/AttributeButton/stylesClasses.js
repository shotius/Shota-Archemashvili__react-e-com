import classNames from 'classnames';

export function styleClasses() {
  const attrubuteBtnClass = classNames('btn--outline attribute-button', {
    'attribute-button--small': this.props.size === 'small',
    'attribute-button--text': this.props.text,
  });

  return { attrubuteBtnClass };
}
