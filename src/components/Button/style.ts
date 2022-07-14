import theme from '@src/theme';
import styled from 'styled-components';

export const Container = styled.button`
  background: ${theme.colors.gray[800]};
  border: 0;
  height: 50px;
  width: 200px;
  font-size: 15px;
  color: ${theme.colors.gray[700]};
  transition: background 0.3s;

  &:hover {
    background: ${theme.colors.orange[700]};
    color: ${theme.colors.txt};
  }
`;
