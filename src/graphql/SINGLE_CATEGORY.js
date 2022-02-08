import { gql } from '@apollo/client';
import { PRODUCT_WITH_PRICE } from './fragments/productFragment';

export const SINGLE_CATEGORY = gql`
  query getCategory($category: CategoryInput!) {
    category(input: $category) {
      products {
        ...ProductWithPrice
      }
    }
  }
  ${PRODUCT_WITH_PRICE}
`;
