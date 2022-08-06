import theme from '@src/theme';
import { transparentize } from 'polished';
import styled from 'styled-components';
import { ContainerButtonProps } from './types';

export const Container = styled.button<ContainerButtonProps>`
  background-color: ${({ isSelected, disabled }) =>
    disabled
      ? `${transparentize(0.7, theme.colors.gray[600])}!important`
      : isSelected
      ? `${theme.colors.orange[700]}`
      : `${theme.colors.gray[800]}`};
  color: ${({ isSelected, disabled }) =>
    disabled
      ? `${theme.colors.gray[600]}!important`
      : isSelected
      ? theme.colors.txt
      : theme.colors.gray[700]};
  border: 0;
  font-size: 15px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.orange[700]};
    color: ${theme.colors.txt};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;
