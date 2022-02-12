import { gql } from '@apollo/client';
import { CORE_PRODUCT, PRODUCT_DESCRIPTION } from './fragments/productFragment';

export const SINGLE_PRODUCT = gql`
  query getProduct($id: String!) {
    product(id: $id) {
      ...CoreProduct
      ...ProductDescription
    }
  }
  ${CORE_PRODUCT}
  ${PRODUCT_DESCRIPTION}
`;
