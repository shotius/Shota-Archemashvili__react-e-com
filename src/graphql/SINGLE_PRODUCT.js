import { gql } from '@apollo/client';

export const SINGLE_PRODUCT = gql`
  query getProduct($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      brand
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
