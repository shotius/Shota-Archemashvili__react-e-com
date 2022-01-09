import { Component } from 'react';
import { AspectRatio } from '../components/molecules/AspectRatio';
import { PublicLayout } from '../components/templates/PublicLayout';

const thumbs = [
  'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087',
  'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg',
  'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087',
  'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg',
];

export class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedImage: thumbs[0] };
  }

  handleThumbClick(thumb) {
    this.setState({
      selectedImage: thumb,
    });
  }

  render() {
    return (
      <PublicLayout>
        <div className="product-page page-container--outer">
          <div className="product-page__container">
            <div className="product-page__slider">
              <div className="product-page__slider__thumbs">
                {thumbs.map((thumb, i) => (
                  <AspectRatio
                    ratio={1}
                    maxWidth="80px"
                    key={`${thumb}${i}`}
                    onClick={() => this.handleThumbClick(thumb)}
                  >
                    <img src={thumb} alt="slider thumb" />
                  </AspectRatio>
                ))}
              </div>
              <div className="product-page__slider__img">
                <img
                  src={this.state.selectedImage}
                  alt="slider main"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            </div>
            <div className="product-page__description"></div>
          </div>
        </div>
      </PublicLayout>
    );
  }
}
