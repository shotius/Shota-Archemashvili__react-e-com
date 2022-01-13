import { gql } from '@apollo/client';

export const ALL_CATEGORY_PRODUCTS = gql`
  query GetCurrency {
    categories {
      name
      products {
        name
        attributes {
          name
          items {
            displayValue
          }
        }
      }
    }
  }
`;
