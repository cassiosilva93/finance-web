import theme from '@src/theme';
import styled from 'styled-components';

export const Container = styled.div`
  label {
    width: 100%;
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${theme.colors.gray[900]};
  border-radius: 5px;
  border: none;
  margin-top: 10px;

  &:focus-within {
    box-shadow: inset 0 0 0 2px ${theme.colors.orange[700]};
  }

  input {
    height: 50px;
    background-color: transparent;
    border: none;
    padding: 0 10px;
    font-size: 0.93rem;
    color: ${theme.colors.gray[700]};
    width: 100%;
  }

  input::placeholder {
    font-size: 13px;
    font-style: italic;
  }

  svg {
    margin-right: 10px;
    transition: color 0.3s;

    &:hover {
      transition: color 0.3s;
      color: ${theme.colors.orange[700]};
    }
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  margin-top: 5px;

  p {
    font-weight: 400;
    font-size: 0.75rem;
    color: ${theme.colors.red[800]};
  }
`;
