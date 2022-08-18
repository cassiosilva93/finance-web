import theme from '@src/theme';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${transparentize(0.5, theme.colors.gray[700])};

  svg {
    color: ${transparentize(0.5, theme.colors.gray[700])};
  }

  @media (max-width: 376px) {
    text-align: center;
  }
`;
