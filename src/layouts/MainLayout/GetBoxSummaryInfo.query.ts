import { gql } from '@apollo/client';

export const GET_BOX_SUMMARY_INFO = gql`
  query GetBoxSummaryInfo {
    getConsolidedValues {
      totalIncome
      totalOutcome
    }
  }
`;
