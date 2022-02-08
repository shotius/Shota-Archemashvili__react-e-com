import { gql } from '@apollo/client';

export const CORE_PRODUCT_FIELDS = gql`
  fragment CoreProductFields on Product {
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
`;
