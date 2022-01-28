/**
 * Function creates a portal div
 * @returns {HTMLDivElement}
 */
const createPortal = () => {
  const div = document.createElement('div');
  div.id = 'toast-portal';
  div.style = 'position: fixed; top: 10px; right: 10px';
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

const toastUtils = {
  createPortal,
  removePortal,
};

export default toastUtils;
