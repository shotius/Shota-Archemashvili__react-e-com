import { gql } from '@apollo/client';
import { CORE_PRODUCT_FIELDS } from './fragments/productFragment';

export const PARTIAL_SINGLE_PRODUCT = gql`
  ${CORE_PRODUCT_FIELDS}
  query getPartialProduct($id: String!) {
    product(id: $id) {
      ...CoreProductFields
    }
  }
`;
