const imageSelectedFromDifferentThumbs = (thumbs, selectedImage) =>
  selectedImage && !thumbs.includes(selectedImage);

const isSliderImageSelected = (thumbs, selectedImage) =>
  !selectedImage && thumbs.length;

const shouldSelectedPictureBeUpdated = (...props) =>
  imageSelectedFromDifferentThumbs(...props) || isSliderImageSelected(...props);

const productPageSliderUtils = {
  imageSelectedFromDifferentThumbs,
  isSliderImageSelected,
  shouldSelectedPictureBeUpdated,
};

export default productPageSliderUtils;
