import { gql } from '@apollo/client';
import {
  PRODUCT_WITH_ATTRIBUTES,
  PRODUCT_WITH_PRICE,
} from './fragments/productFragment';

export const SINGLE_PRODUCT = gql`
  query getProduct($id: String!) {
    product(id: $id) {
      ...ProductWithPrice
      ...ProductWithAttribute
    }
  }
  ${PRODUCT_WITH_ATTRIBUTES}
  ${PRODUCT_WITH_PRICE}
`;
