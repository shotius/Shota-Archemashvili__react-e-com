import { Component } from 'react';
import { Heading } from '../components/atoms/Heading';
import { AspectRatio } from '../components/molecules/AspectRatio';
import { PublicLayout } from '../components/templates/PublicLayout';

export class CatalogPage extends Component {
  render() {
    return (
      <PublicLayout>
        <div className="catalog">
          <div className="catalog__container">
            <Heading className="catalog__header">Catalog Page</Heading>
            <div className="catalog__list">
              <div className="catalog__card">
                <AspectRatio ratio={356 / 338} maxWidth="356px">
                  <img
                    src="https://www.closetag.com/images/photo4.jpg"
                    alt="card pic"
                  />
                </AspectRatio>
              </div>
              <div className="catalog__card">
                <AspectRatio ratio={356 / 338} maxWidth="356px">
                  <img
                    src="https://www.closetag.com/images/photo4.jpg"
                    alt="card pic"
                  />
                </AspectRatio>
              </div>
              <div className="catalog__card">
                <AspectRatio ratio={356 / 338} maxWidth="356px">
                  <img
                    src="https://www.closetag.com/images/photo4.jpg"
                    alt="card pic"
                  />
                </AspectRatio>
              </div>
              <div className="catalog__card">
                <AspectRatio ratio={356 / 338} maxWidth="356px">
                  <img
                    src="https://www.closetag.com/images/photo4.jpg"
                    alt="card pic"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </PublicLayout>
    );
  }
}
