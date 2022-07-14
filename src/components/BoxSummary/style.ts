import theme from '@src/theme';
import styled from 'styled-components';

export const Container = styled.section`
  width: 300px;
  height: 170px;
  background-color: ${theme.colors.gray[800]};
  padding: 20px;

  h1 {
    font-weight: bold;
    font-size: 27px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;
