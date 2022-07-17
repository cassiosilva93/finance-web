import { transparentize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${theme.colors.gray[900]};
    color: ${theme.colors.gray[700]}  ;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay {
    background-color: ${transparentize(0.7, '#D9D9D9')};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 520px;
    background-color: ${theme.colors.gray[800]};
    position: relative;
    border-radius: 10px;
  }

  .divider {
    height: 4px;
    width: 100%;
    max-width: 110px;
    background: ${theme.colors.orange[700]};
    border-radius: 3px;
    margin: 5px 0;
  }

  .react-modal-close {
    position: absolute;
    right: 20px;
    top: 20px;
    background-color: transparent;
    border: none;
    transaction: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export default GlobalStyle;
