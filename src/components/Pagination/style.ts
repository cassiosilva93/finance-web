import theme from '@src/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  button {
    height: 40px;
    width: 40px;
    border: none;
    color: ${theme.colors.gray[700]};
    background-color: ${theme.colors.gray[800]};
    transition: background 0.3s;
    font-size: 17px;
  }

  button:hover {
    transition: background 0.3s;
    background: ${theme.colors.orange[700]};
    color: ${theme.colors.txt};
  }

  div + div {
    padding-left: 5px;
  }
`;
