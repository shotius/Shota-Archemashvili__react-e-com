import { gql } from '@apollo/client';
import { CORE_PRODUCT_FIELDS } from './fragments/productFragment';

export const SINGLE_PRODUCT = gql`
  ${CORE_PRODUCT_FIELDS}
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
      ...CoreProductFields
    }
  }
`;
