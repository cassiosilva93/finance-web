import { gql } from '@apollo/client';

export const GET_TRANSACTION_INFO = gql`
  query GetTransactionInfo {
    getConsolidedValues {
      lastTransactionRegistered
      totalTransactionRegister
    }
  }
`;
