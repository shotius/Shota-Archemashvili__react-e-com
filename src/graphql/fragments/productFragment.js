import { gql } from '@apollo/client';

export const PRODUCT_WITH_ATTRIBUTES = gql`
  fragment ProductWithAttribute on Product {
    description
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

export const PRODUCT_WITH_PRICE = gql`
  fragment ProductWithPrice on Product {
    id
    name
    brand
    gallery
    inStock
    category
    prices {
      currency {
        label
        symbol
      }
      amount
    }
  }
`;
