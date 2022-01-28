import classNames from 'classnames';

export function styleClasses() {
  const modalOverlayClass = classNames({
    overlay: this.props.isOpen,
    'overlay--gray': this.props.isColored,
  });

  const popoverOverlayClass = classNames({
    overlay: this.props.isOpen,
    'overlay--gray': this.props.isColored,
  });

  return {
    modalOverlayClass,
    popoverOverlayClass,
  };
}
