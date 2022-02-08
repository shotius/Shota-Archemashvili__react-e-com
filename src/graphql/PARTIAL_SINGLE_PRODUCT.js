import { gql } from '@apollo/client';
import { PRODUCT_WITH_ATTRIBUTES } from './fragments/productFragment';

export const PARTIAL_SINGLE_PRODUCT = gql`
  ${PRODUCT_WITH_ATTRIBUTES}
  query getPartialProduct($id: String!) {
    product(id: $id) {
      ...ProductWithAttribute
    }
  }
`;
