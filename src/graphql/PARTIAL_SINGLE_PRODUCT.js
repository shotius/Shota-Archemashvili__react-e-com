import { gql } from '@apollo/client';
import { CORE_PRODUCT_FIELDS } from './fragments/productFragment';

// ${CORE_PRODUCT_FIELDS}
export const PARTIAL_SINGLE_PRODUCT = gql`
  query getPartialProduct($id: String!) {
    product(id: $id) {
      description
      brand
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
  }
`;
