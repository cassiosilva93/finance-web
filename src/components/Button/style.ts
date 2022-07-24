import theme from '@src/theme';
import styled from 'styled-components';
import { ContainerButtonProps } from './types';

export const Container = styled.button<ContainerButtonProps>`
  background-color: ${props =>
    props.isSelected ? theme.colors.orange[700] : theme.colors.gray[800]};
  color: ${props =>
    props.isSelected ? theme.colors.txt : theme.colors.gray[700]};
  border: 0;
  font-size: 15px;
  transition: background 0.3s;

  &:hover {
    background: ${theme.colors.orange[700]};
    color: ${theme.colors.txt};
  }
`;
