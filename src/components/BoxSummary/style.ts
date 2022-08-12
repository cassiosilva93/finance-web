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
  color: ${({ changeColor, value }) =>
    changeColor && value > 0
      ? theme.colors.green[900]
      : changeColor
      ? value === 0
        ? theme.colors.gray[700]
        : theme.colors.red[800]
      : theme.colors.gray[700]}};

`;
