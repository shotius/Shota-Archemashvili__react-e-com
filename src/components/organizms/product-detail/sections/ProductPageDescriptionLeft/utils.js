// returns true if product is fetched and product description is enough to fill the container
function shouldDescriptionButtonBeVisible() {
  return (
    this.props.product &&
    this.descriptionContainerRef.current &&
    this.descriptionRef.current &&
    this.descriptionContainerRef.current.clientHeight <=
      this.descriptionRef.current.clientHeight
  );
}

function shouldShowMoreButtonBeVisible() {
  return (
    !this.state.isDescriptionButtonShown &&
    shouldDescriptionButtonBeVisible.call(this)
  );
}

function getAttributes() {
  return { ...this.state.selectedAttributes };
}

function getUpdatedAttibutes({ attributeName, value }) {
  const attributes = this.getAttributes();

  if (attributes[attributeName] !== value) {
    attributes[attributeName] = value;
  } else {
    delete attributes[attributeName];
  }

  return attributes;
}

const productPageDeatailLeftUtils = {
  shouldDescriptionButtonBeVisible,
  shouldShowMoreButtonBeVisible,
  getAttributes,
  getUpdatedAttibutes,
};

export default productPageDeatailLeftUtils;
