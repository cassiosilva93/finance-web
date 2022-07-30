import theme from '@src/theme';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
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
