import { FALLBACK_IMG_URL } from '../../../config/constants';

const setOpacity = (target, opacity) => {
  target.style.opacity = opacity;
};

const loadDefaultImage = (e, fallbackSrc) => {
  e.target.src = fallbackSrc || FALLBACK_IMG_URL;
  e.target.style['object-fit'] = 'contain';
};

const imageUtils = {
  setOpacity,
  loadDefaultImage,
};

export default imageUtils;
