import { Component } from 'react';
import { Heading } from '../components/atoms/Heading';
import CatalogCard from '../components/organizms/cards/CatalogCard';
import { PublicLayout } from '../components/templates/PublicLayout';
import productServices from '../services/productServices';
import { withParams } from '../utils/HOC/withParams';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loading: true };
  }
  componentDidMount = async () => {
    const category = this.props.params.category;

    const res = await productServices.getSingleCategory(category);

    if (!res.loading) {
      this.setState({ loading: false });
      this.setState({ data: res.data.category.products });
    }
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
                <p>Loading ...</p>
              ) : !data.length ? (
                <p>no products</p>
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
