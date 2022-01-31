import classNames from 'classnames';

const baseId = 'toast-portal';
/**
 * Function creates a portal div and appends it to the body tag
 * @returns {HTMLDivElement}
 */
const createRootPortal = (className) => {
  const div = document.createElement('div');
  div.id = baseId;
  div.className = classNames(baseId);
  document.getElementsByTagName('body')[0].prepend(div);
  return div;
};

/** Function creates sub portals and appends to the root portal  */
const createSubPortals = () => {
  const subPortals = ['top', 'bottom','top-right'];
  const rootPortal = document.getElementById(baseId);
  for (let portal of subPortals) {
    const subPortal = document.createElement(`div`);
    subPortal.id = `${portal}-portal`;
    subPortal.className = `${baseId}--${portal}`;
    rootPortal.appendChild(subPortal);
  }
};

/**
 * Funciton removes the portal div
 * @param {*} div
 */
const removePortal = () => {
  const rootPortal = document.getElementById(baseId);
  document.getElementsByTagName('body')[0].removeChild(rootPortal);
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
  createRootPortal,
  removePortal,
  hasToastCreated,
  getRightPortal,
  createSubPortals,
};

export default toastUtils;
