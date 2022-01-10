import { Component } from 'react';
import { AspectRatio } from '../components/molecules/AspectRatio';
import { PublicLayout } from '../components/templates/PublicLayout';
import { Heading } from '../components/atoms/Heading';
import { Button } from '../components/atoms/buttons/Button';
import classNames from 'classnames';

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
    this.state = { selectedImage: thumbs[0], showDesc: false };
    this.handleShowDescription = this.handleShowDescription.bind(this);
  }

  componentDidMount() {
    document.body.style.overflowY = 'scroll';
    console.log('document: ', document.body.style);
  }

  handleThumbClick(thumb) {
    this.setState({
      selectedImage: thumb,
    });
  }

  handleShowDescription() {
    this.setState({ showDesc: !this.state.showDesc });
  }

  render() {
    const descriptiongClass = classNames(
      'pr-details__description',
      'text--regular',
      {
        'pr-details__description--hidden': this.state.showDesc,
      }
    );

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
            <div className="product-page__pr-details pr-details">
              <div className="pr-details__container">
                <div className="pr-details__headings">
                  <Heading className="heading--main -pb-12">Apollo</Heading>
                  <Heading className="heading--secondary">
                    Running Short
                  </Heading>
                </div>
                <div className="pr-details__sizes">
                  <Heading className="pr-details__section-heading">
                    Sizes:{' '}
                  </Heading>
                  <div className="pr-details__btn-group">
                    <Button className="btn--outline btn--outline--selected">
                      xs
                    </Button>
                    <Button className="btn--outline">s</Button>
                    <Button className="btn--outline">m</Button>
                    <Button className="btn--outline">L</Button>
                  </div>
                </div>
                <div className="pr-details__price">
                  <Heading className="pr-details__section-heading -pb-10">
                    price:
                  </Heading>
                  <Heading className="pr-details__price">$50.00</Heading>
                </div>
                <Button className="btn--primary">add to card</Button>
                <div className={descriptiongClass}>
                  <p>
                    Find stunning women's cocktail dresses and party dresses.
                    Stand out in lace and metallic cocktail dresses and party
                    dresses from all your favorite brands. Find stunning women's
                    cocktail dresses and party dresses. Stand out in lace and
                    metallic cocktail dresses and party dresses from all your
                    favorite brands. Find stunning women's cocktail dresses and
                    party dresses. Stand out in lace and metallic cocktail
                    dresses and party dresses from all your favorite brands.
                    Find stunning women's cocktail dresses and party dresses.
                    Stand out in lace and metallic cocktail dresses and party
                    dresses from all your favorite brands. Find stunning women's
                    cocktail dresses and party dresses. Stand out in lace and
                    metallic cocktail dresses and party dresses from all your
                    favorite brands.
                  </p>
                </div>
                <Button
                  style={{
                    marginTop: '-32px',
                    display: this.state.showDesc && 'none',
                  }}
                  onClick={this.handleShowDescription}
                >
                  show more
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ visibility: this.state.showDesc ? 'visible' : 'hidden' }}>
          <Heading className="heading--secondary -pt-48">Description</Heading>
          <p className="text--regular">
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands. Find stunning women's cocktail dresses and
            party dresses. Stand out in lace and metallic cocktail dresses and
            party dresses from all your favorite brands. Find stunning women's
            cocktail dresses and party dresses. Stand out in lace and metallic
            cocktail dresses and party dresses from all your favorite brands.
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands. Find stunning women's cocktail dresses and
            party dresses. Stand out in lace and metallic cocktail dresses and
            party dresses from all your favorite brands.
          </p>
          <Button onClick={this.handleShowDescription} className="-w-full">
            show less
          </Button>
        </div>
      </PublicLayout>
    );
  }
}
