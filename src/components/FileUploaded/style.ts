import theme from '@src/theme';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 20px 20px;

  button {
    border: none;
    background-color: transparent;
    color: ${theme.colors.orange[700]};
    font-size: 12px;
    margin-left: 7px;
    transition: color 0.3s;
    text-decoration: underline;

    &:hover {
      color: ${transparentize(0.1, theme.colors.orange[700])};
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }

  span {
    font-size: 14px;
  }

  strong {
    font-size: 12px;
  }
`;

export const RemoveTransactionContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${transparentize(0.8, '#8C8C8C')};
  padding: 5px;
  font-size: 11px;
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
