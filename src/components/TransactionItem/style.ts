import theme from '@src/theme';
import { transparentize } from 'polished';
import styled from 'styled-components';
import { RightInfoProps } from './types';

export const Container = styled.article`
  height: 90px;
  background-color: ${theme.colors.gray[800]};
  border-radius: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    background-color: ${transparentize(0.3, theme.colors.gray[800])};
  }

  body::-webkit-scrollbar {
    background: orange;
  }
`;

export const TransactionInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftInfo = styled.div`
  margin-left: 25px;

  strong {
    font-size: 0.75rem;
  }
`;

export const RightInfo = styled.div<RightInfoProps>`
  display: flex;

  p {
    display: flex;
    align-items: center;
    margin-right: 50px;
    color: ${({ type }) =>
      type === 'outcome' ? theme.colors.red[900] : theme.colors.green[900]};
  }

  svg:hover {
    transition: color 0.3s;
    color: ${theme.colors.orange[700]};
  }
`;
