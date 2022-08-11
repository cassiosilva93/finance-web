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
  isPositiveValue: boolean;
}>`
  font-weight: bold;
  font-size: 27px;
  color: ${({ changeColor, isPositiveValue }) =>
    changeColor && isPositiveValue
      ? theme.colors.green[900]
      : changeColor
      ? theme.colors.red[900]
      : theme.colors.gray[700]};};
`;
