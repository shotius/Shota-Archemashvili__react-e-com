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

function getSelectedAttributes() {
  return { ...this.state.selectedAttributes };
}

function getUpdatedAttibutes({ attributeName, value }) {
  const attributes = this.getSelectedAttributes();

  if (attributes[attributeName] !== value) {
    attributes[attributeName] = value;
  } else {
    delete attributes[attributeName];
  }

  return attributes;
}

function validateAttributes() {
  const selectedAttributes = this.getSelectedAttributes();
  // list all attrubute names
  // if there are not some attributes selected give an error
  const attributeNames = this.props.product.attributes.map((attr) => attr.id);
  const selectedAttributeKeys = Object.keys(selectedAttributes);

  // validation
  // go through all attributes and check if all of them are selected
  const fieldErrors = {};
  for (let attr of attributeNames) {
    if (!selectedAttributeKeys.includes(attr)) {
      fieldErrors[attr] = `${attr} is not selected`;
    }
  }

  return fieldErrors;
}

const productPageDeatailLeftUtils = {
  shouldDescriptionButtonBeVisible,
  shouldShowMoreButtonBeVisible,
  getSelectedAttributes,
  getUpdatedAttibutes,
  validateAttributes,
};

export default productPageDeatailLeftUtils;
