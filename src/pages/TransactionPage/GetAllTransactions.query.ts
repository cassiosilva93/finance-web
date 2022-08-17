import { gql } from '@apollo/client';

export const GET_ALL_TRANSACTIONS = gql`
  query GetAllTransactions {
    getTransactions {
      id
      type
      title
      created_at
      value
      category
    }
  }
`;
