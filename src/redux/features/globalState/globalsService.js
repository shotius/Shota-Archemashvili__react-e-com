import { uuid } from '../../../utils/helpers';

/**
 * Function filters toast by id
 * @param {Toast[]} toasts
 * @param {string} id
 * @returns
 */
const removeToastFrom = (toasts, id) =>
  toasts.filter((toast) => toast.id !== id);

/**
 * Function addes some fields to the toast to make it sensible
 * @param {Toast} toast
 * @returns {Toast}
 */
const formatToast = (toast) => {
  const duration = toast.duration || 5000;
  const position = toast.position || 'top';
  const status = toast.status || 'success';
  return {
    ...toast,
    duration,
    position,
    status,
    id: uuid(),
  };
};

/** Exports  */

const globalsService = {
  removeToastFrom,
  formatToast,
};

export default globalsService;
