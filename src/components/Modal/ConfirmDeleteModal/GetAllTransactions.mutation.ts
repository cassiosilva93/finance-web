import { gql } from '@apollo/client';

export const DELETE_TRANSACTION = gql`
  mutation DeleteTransaction($id: String) {
    deleteTransaction(id: $id)
  }
`;
