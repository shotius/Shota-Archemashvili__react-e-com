import { gql } from '@apollo/client';

export const SINGLE_CATEGORY = gql`
  query getCategory($category: CategoryInput!) {
    category(input: $category) {
      products {
        id
        name
        gallery
        inStock
        prices {
          currency
          amount
        }
      }
    }
  }
`;
