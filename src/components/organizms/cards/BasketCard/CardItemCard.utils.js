function handleEncrease() {
  const { product, decrease, setToast } = this.props;
  // if last one is removed from the cars show notification
  product.count === 1 &&
    setToast({
      title: `${product.name} removed from basket`,
      duration: 3000,
    });

  decrease(product);
}

function isYes(value) {
  return value === 'Yes';
}

function isYesOrNo(value) {
  return value === 'Yes' || value === 'No';
}

const basketPopoverCardUtils = {
  isYesOrNo,
  isYes,
  handleEncrease,
};

export default basketPopoverCardUtils;
