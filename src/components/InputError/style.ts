import theme from '@src/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  p {
    font-weight: 400;
    font-size: 0.75rem;
    color: ${theme.colors.red[800]};
  }
`;
