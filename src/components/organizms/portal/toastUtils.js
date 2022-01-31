import classNames from 'classnames';
import { uuid } from '../../../utils/helpers';

/**
 * Function creates a portal div
 * @returns {HTMLDivElement}
 */
const createPortal = (className) => {
  const div = document.createElement('div');
  div.id = 'toast-portal-' + uuid();
  div.className = classNames('toast-portal', className);
  document.getElementsByTagName('body')[0].prepend(div);
  return div;
};

/**
 * Funciton removes the portal div
 * @param {*} div
 */
const removePortal = (div) => {
  document.getElementsByTagName('body')[0].removeChild(div);
};

/**
 * Function checks if prev toasts were less then now
 * @param {Toast[]} prevToats
 * @param {Toast[]} toasts
 * @returns {boolean}
 */
const hasToastCreated = (prevToats, toasts) =>
  prevToats.length <= toasts.length && toasts.length;

/**
 * Function returns right portal for toast
 * @param {Toast} toast
 * @returns
 */
function getRightPortal(toast) {
  switch (toast.position) {
    case 'top':
      return this.state.portalTop;
    case 'bottom':
      return this.state.portalBottom;
    case 'top-right':
      return this.state.portalTopRight;
    default:
      return this.state.portalTop;
  }
}
/** Exports */
const toastUtils = {
  createPortal,
  removePortal,
  hasToastCreated,
  getRightPortal,
};

export default toastUtils;
