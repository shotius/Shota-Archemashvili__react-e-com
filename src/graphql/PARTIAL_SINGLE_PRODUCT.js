import { gql } from '@apollo/client';

export const PARTIAL_SINGLE_PRODUCT = gql`
  query getPartialProduct($id: String!) {
    product(id: $id) {
      description
      brand
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
