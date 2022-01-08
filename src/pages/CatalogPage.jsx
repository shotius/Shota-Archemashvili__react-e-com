import { Component } from 'react';
import { Heading } from '../components/atoms/Heading';
import { CatalogCard } from '../components/organizms/cards/CatalogCard';
import { PublicLayout } from '../components/templates/PublicLayout';

const damnProducts = [
  {
    picture: 'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087',
    title: 'Apollo Running Short',
    price: 50,
  },
  {
    picture: 'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg',
    title: 'Apollo Running Short',
    price: 50,
  },
  {
    picture: 'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg',
    title: 'Apollo Running Short',
    price: 50,
  },
  {
    picture: 'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087',
    title: 'Apollo Running Short',
    price: 50,
  },
];

export class CatalogPage extends Component {
  render() {
    return (
      <PublicLayout>
        <div className="catalog">
          <div className="catalog__container">
            <Heading className="catalog__header">Catalog Page</Heading>
            <div className="catalog__list">
              {damnProducts.map((product, i) => (
                <CatalogCard key={i} product={product} />
              ))}
            </div>
          </div>
        </div>
      </PublicLayout>
    );
  }
}
