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
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 10px 20px;
  background-color: ${transparentize('0.7', '#28262E')};

  div {
    flex-direction: row;
    display: flex;
    align-items: center;
  }

  button {
    background: ${theme.colors.orange[700]};
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

export const CancelContainer = styled.a`
  margin-right: 30px;
  font-size: 0.93rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${theme.colors.orange[700]};
  }
`;

export const TransactionTypeContainer = styled.div`
  margin-top: 10px;
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

export const ErrorsContainer = styled.div`
  padding: 0 0 20px 20px;

  div + div {
    margin-top: 3px;
  }
`;
