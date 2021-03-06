import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

/** uuid */
export const uuid = () => {
  let dt = new Date().getTime();

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};

export const stopPropagation = (e) => {
  if (e.stopPropagation) e.stopPropagation();
};

export const isObjectEmpty = (obj) => Object.keys(obj).length;

/**
 * Function receives stringified html and returns react component
 * @param {*} string 
 * @returns html
 */
export const htmlToReact = (string) => parse(DOMPurify.sanitize(string));
