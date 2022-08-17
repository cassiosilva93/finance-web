import { gql } from '@apollo/client';

export const UPDATE_TRANSACTION = gql`
  mutation UpdateTransaction($id: String, $data: TransactionInput) {
    updateTransaction(id: $id, data: $data) {
      id
    }
  }
`;
