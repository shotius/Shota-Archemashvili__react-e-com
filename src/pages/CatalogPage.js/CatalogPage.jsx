import { Component } from 'react';
import { Heading } from '../../components/atoms/typography/Heading';
import LoadingCards from '../../components/molecules/LoadingCards';
import CatalogCard from '../../components/organizms/cards/CatalogCard/CatalogCard';
import { PublicLayout } from '../../components/templates/PublicLayout';
import productServices from '../../services/productServices';
import { withParams } from '../../utils/HOC/withParams';
import catalogProductUtils from './utils';

const { getSingleCategory } = productServices;
const { updateCategoryData } = catalogProductUtils;

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loading: true };
    this.updateCategoryData = updateCategoryData.bind(this);
  }

  componentDidMount = async () => {
    const category = this.props.params.category;
    this.updateCatalog(category);
  };

  componentDidUpdate(prevProps) {
    const category = this.props.params.category;
    const prevCategory = prevProps.params.category;

    // if category changed fetch new category
    if (prevCategory !== category) {
      this.updateCatalog(category);
    }
  }

  updateCatalog = async (category) => {
    const cetegoryProducts = await getSingleCategory(category);
    this.updateCategoryData(cetegoryProducts);
  };

  render() {
    const { data, loading } = this.state;

    return (
      <PublicLayout>
        <div className="catalog">
          <div className="catalog__container">
            <Heading className="catalog__header">Catalog Page</Heading>
            <div className="catalog__list">
              {loading ? (
                <LoadingCards />
              ) : !data.length ? (
                <Heading className="-w-full -center_content heading--main">
                  no products
                </Heading>
              ) : (
                data.map((product) => (
                  <CatalogCard key={product.id} product={product} />
                ))
              )}
            </div>
          </div>
        </div>
      </PublicLayout>
    );
  }
}

export default withParams(CatalogPage);
