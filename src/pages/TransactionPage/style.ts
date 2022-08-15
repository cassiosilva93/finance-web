import theme from '@src/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 120px;
  margin-top: 30px;

  @media (max-width: 998px) and (max-width: 840px) {
    padding: 0 50px;
  }

  @media (max-width: 426px) {
    padding: 0px 20px 0 20px;
  }
`;

export const AddTransactionContainer = styled.div`
  button + button {
    margin-left: 3px;
  }

  button:nth-child(1) {
    border-radius: 5px 0 0 5px;
  }

  button:last-child {
    border-radius: 0px 5px 5px 0px;
  }

  @media (max-width: 998px) and (max-width: 840px) {
    display: flex;
    justify-content: center;
  }
`;

export const RegisterInformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  strong {
    color: ${theme.colors.orange[700]};
  }

  .last-transaction {
    font-size: 0.81rem;
  }
`;

export const TransactionsContainer = styled.div`
  article + article {
    margin-top: 15px;
    width: 100%;
  }
`;

export const Content = styled.div`
  padding-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingContainer = styled.div`
  svg {
    margin-top: 100px;
    height: 35px;
    width: 35px;
  }
`;
