import { gql } from '@apollo/client';

export const CREATE_NEW_TRANSACTION = gql`
  mutation CreateNewTransaction(
    $title: String
    $type: String
    $value: Float
    $category: String
  ) {
    createTransaction(
      data: { title: $title, type: $type, value: $value, category: $category }
    ) {
      id
    }
  }
`;
