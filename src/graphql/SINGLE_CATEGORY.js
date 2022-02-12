import { gql } from '@apollo/client';
import { CORE_PRODUCT } from './fragments/productFragment';

export const SINGLE_CATEGORY = gql`
  query getCategory($category: CategoryInput!) {
    category(input: $category) {
      products {
        ...CoreProduct
      }
    }
  }
  ${CORE_PRODUCT}
`;
