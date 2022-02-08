import { gql } from '@apollo/client';
import { CORE_PRODUCT_FIELDS } from './fragments/productFragment';

  // ${CORE_PRODUCT_FIELDS}
export const SINGLE_PRODUCT = gql`
  query getProduct($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      category
      prices {
        currency
        amount
      }
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
    }
  }
`;
