import theme from '@src/theme';
import styled from 'styled-components';

interface SpanProps {
  type: string;
}

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  section + section {
    margin-left: 3px;
  }

  section:nth-child(1) {
    border-radius: 10px 0 0 10px;
  }

  section:last-child {
    border-radius: 0px 10px 10px 0px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button + button {
    margin-left: 3px;
  }

  button:nth-child(1) {
    border-radius: 10px 0 0 10px;
  }

  button:last-child {
    border-radius: 0px 10px 10px 0px;
  }
`;

export const DashboardContainer = styled.section`
  display: flex;
  padding: 0 120px;
  margin-top: 20px;

  main {
    width: 60%;
    background-color: ${theme.colors.gray[800]};
    margin-right: 3px;
  }

  aside + aside {
    margin-top: 3px;
  }

  aside {
    width: 100%;
    height: 50%;
    background-color: ${theme.colors.gray[800]};
  }
`;

export const AsideDashboards = styled.div`
  width: 40%;
  flex-direction: column;
  display: flex;
`;

export const TableContainer = styled.section`
  padding: 0 120px;

  table {
    width: 100%;
    border-spacing: 0 8px;
    padding: 10px;
  }

  div {
    margin-top: 20px;
    border-radius: 10px;
    background-color: ${theme.colors.gray[800]};
    width: 100%;
  }

  th {
    padding: 10px;
    text-align: left;
    padding: 20px 32px;
  }

  tr {
    margin: 0px 10px;
  }

  td {
    padding: 20px 32px;
    background-color: ${theme.colors.gray[900]};

    svg {
      transition: color 0.3s;
    }

    svg:hover {
      transition: color 0.3s;
      color: ${theme.colors.orange[700]};
    }
  }

  td:first-child {
    border-radius: 10px 0 0 10px;
  }

  td:last-child {
    border-radius: 0 10px 10px 0;
  }
`;

export const Span = styled.span<SpanProps>`
  color: ${({ type }) =>
    type === 'income' ? theme.colors.green[900] : theme.colors.red[900]};
`;

export const PaginationContainer = styled.div`
  margin: 20px 0 20px 0;
  padding: 0 120px;
  display: flex;
  justify-content: end;
`;
