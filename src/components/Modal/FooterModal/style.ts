import theme from '@src/theme';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div<{ hasDeleteButton: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${transparentize('0.7', '#28262E')};
  justify-content: ${({ hasDeleteButton }) =>
    hasDeleteButton ? 'space-between' : 'end'};

  div {
    flex-direction: row;
    display: flex;
    align-items: center;
  }

  button {
    background: ${theme.colors.orange[700]};
    border: 0;
    border-radius: 5px;
    color: ${theme.colors.txt};
    transition: background-color 0.3s;
    display: flex;

    &:hover {
      background-color: ${transparentize(0.3, theme.colors.orange[700])};
      color: ${theme.colors.txt};
    }
  }
`;

export const RemoveTransactionContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${transparentize(0.8, '#8C8C8C')};
  padding: 8px;
  font-size: 0.75rem;
  border-radius: 5px;
  transition: background-color 0.3s;
  cursor: pointer;

  a {
    margin-left: 5px;
  }

  &:hover {
    transition: background-color 0.3s;
    background-color: ${theme.colors.orange[700]};
    color: ${theme.colors.txt};
  }
`;

export const CancelContainer = styled.a`
  margin-right: 30px;
  font-size: 0.93rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${theme.colors.orange[700]};
  }
`;
