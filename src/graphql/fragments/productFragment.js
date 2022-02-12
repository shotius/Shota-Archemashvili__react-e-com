import { gql } from '@apollo/client';

export const PRODUCT_DESCRIPTION = gql`
  fragment ProductDescription on Product {
    description
  }
`;

export const CORE_PRODUCT = gql`
  fragment CoreProduct on Product {
    id
    name
    brand
    gallery
    inStock
    category
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
    prices {
      currency {
        label
        symbol
      }
      amount
    }
  }
`;
