import theme from '@src/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 120px;
  margin-top: 20px;
  display: flex;
`;

export const MainDashboard = styled.div`
  width: 70%;
  height: 70vh;
  background-color: ${theme.colors.gray[800]};
  margin-right: 5px;
  border-radius: 10px 0 0 10px;
`;

export const SideDashboard = styled.div`
  width: 30%;
  background-color: ${theme.colors.gray[800]};
  border-radius: 0 10px 10px 0;
`;
