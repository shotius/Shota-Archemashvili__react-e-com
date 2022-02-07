export const uuid = () => {
  let dt = new Date().getTime();

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};

export const loadDefaultImage = (e, fallbackSrc) => {
  e.target.src =
    fallbackSrc ||
    'https://res.cloudinary.com/car-space-v1/image/upload/v1644194330/image-not-found_yuufij.jpg';
  e.target.style['object-fit'] = 'contain';
};

export const isObjectEmpty = (obj) => Object.keys(obj).length;
