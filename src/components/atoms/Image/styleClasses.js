import classNames from 'classnames';

export function styleClasses() {
  const { className, speed = 'mouse', fadeIn } = this.props;

  const cn = classNames(
    { [`animation--easyload animation--easyload--${speed}`]: fadeIn },
    className
  );

  return { cn };
}
