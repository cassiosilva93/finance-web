import theme from '@src/theme';
import { transparentize } from 'polished';
import styled from 'styled-components';

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
    display: flex;
    background: ${theme.colors.orange[700]};
    border: 0;
    border-radius: 5px;
    height: 40px;
    width: 150px;
    font-size: 0.93rem;
    color: ${theme.colors.txt};
    transition: background-color 0.3s;
    justify-content: center;
    align-items: center;

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

export const ModalBody = styled.div`
  padding: 20px;
  margin-top: 20px;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;
