import theme from '@src/theme';
import { transparentize } from 'polished';
import styled from 'styled-components';
import { RadioBoxProps } from './types';

const colors = {
  green: theme.colors.green[900],
  red: theme.colors.red[900],
};

export const Content = styled.div`
  padding: 20px;

  input {
    height: 50px;
    background-color: ${theme.colors.gray[900]};
    border: none;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 0.93rem;
    color: ${theme.colors.gray[700]};

    & + input {
      margin-top: 10px;
    }

    &:focus {
      border: 2px solid ${theme.colors.orange[700]};
    }
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${transparentize('0.7', '#28262E')};

  button {
    background: ${theme.colors.orange[700]};
    border: 0;
    border-radius: 5px;
    height: 40px;
    width: 150px;
    font-size: 0.93rem;
    color: ${theme.colors.txt};
    transition: background-color 0.3s;

    &:hover {
      background-color: ${transparentize(0.3, theme.colors.orange[700])};
      color: ${theme.colors.txt};
    }
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

export const TransactionTypeContainer = styled.div`
  margin: 10px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;

  span {
    display: inline-block;
    margin-right: 15px;
    font-size: 0.93rem;
  }
`;

export const RadioBox = styled.button<RadioBoxProps>`
  height: 50px;
  background-color: ${props =>
    props.isActive
      ? transparentize(0.8, colors[props.activeColor])
      : theme.colors.gray[900]};

  display: flex;
  border: none;
  border-radius: 5px;
  align-items: center;
  justify-content: center;

  color: ${props =>
    props.isActive
      ? transparentize(0.4, theme.colors.txt)
      : theme.colors.gray[700]};

  transition: filter 0.3s;

  &:hover {
    transition: filter 0.3s;
    filter: brightness(0.8);
  }
`;
