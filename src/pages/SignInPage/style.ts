import theme from '@src/theme';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    font-size: 0.87rem;
  }
`;

export const Form = styled.form`
  background-color: ${theme.colors.gray[800]};
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 10px;

  div + div {
    margin-top: 10px;
  }

  div {
    width: 100%;
  }

  button {
    width: 100%;
    background: ${theme.colors.orange[700]};
    border-radius: 5px;
    color: ${theme.colors.txt};
    transition: background-color 0.3s;
    margin-top: 20px;
    display: flex;

    &:hover {
      background-color: ${transparentize(0.3, theme.colors.orange[700])};
      color: ${theme.colors.txt};
    }
  }

  a {
    justify-content: center;
    color: ${theme.colors.orange[700]};
    font-size: 0.75rem;
  }

  .forgot-password {
    margin-top: 10px;
  }

  @media (max-width: 1025px) {
    width: 40%;
  }

  @media (max-width: 769px) {
    width: 50%;
  }

  @media (max-width: 426px) {
    width: 100%;
    border-radius: 0;
    height: 100%;
    justify-content: center;
  }
`;

export const NoHaveRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  font-size: 0.75rem;

  a {
    margin-left: 5px;
  }
`;
