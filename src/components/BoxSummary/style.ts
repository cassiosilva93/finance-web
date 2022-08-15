import theme from '@src/theme';
import styled from 'styled-components';

export const Container = styled.section`
  width: 300px;
  height: 170px;
  background-color: ${theme.colors.gray[800]};
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Value = styled.h1<{
  changeColor?: boolean;
  value: number;
}>`
  font-weight: bold;
  font-size: 1.68rem;
  color: ${({ changeColor, value }) => {
    if (changeColor && value > 0) return theme.colors.green[900];
    if (!changeColor || value === 0) return theme.colors.gray[700];
    return theme.colors.red[800];
  }}};
`;
