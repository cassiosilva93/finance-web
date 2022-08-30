import theme from '@src/theme';
import { transparentize } from 'polished';
import styled from 'styled-components';
import { ContainerButtonProps } from './types';

export const Container = styled.button<ContainerButtonProps>`
  background-color: ${({ isSelected, disabled }) => {
    const { gray, orange } = theme.colors;
    if (disabled) return `${transparentize(0.7, gray[600])}!important`;
    if (isSelected) return orange[700];
    return gray[800];
  }};

  color: ${({ isSelected, disabled }) => {
    const { gray, txt } = theme.colors;
    if (disabled) return `${gray[600]}!important`;
    if (isSelected) return txt;
    return gray[700];
  }};

  border: 0;
  font-size: 0.93rem;
  transition: background-color 0.3s;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${theme.colors.orange[700]};
    color: ${theme.colors.txt};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;
