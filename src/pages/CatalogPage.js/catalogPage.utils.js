function updateCategoryData(cetegoryProducts) {
  this.setState({ data: cetegoryProducts, loading: false });
}

const catalogProductUtils = {
  updateCategoryData,
};

export default catalogProductUtils;
