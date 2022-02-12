import { gql } from '@apollo/client';
import { PRODUCT_DESCRIPTION } from './fragments/productFragment';

export const PARTIAL_SINGLE_PRODUCT = gql`
  query getPartialProduct($id: String!) {
    product(id: $id) {
      ...ProductDescription
    }
  }
  ${PRODUCT_DESCRIPTION}
`;
