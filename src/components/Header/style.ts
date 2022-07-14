import theme from '@src/theme';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 120px;
  margin-top: 20px;
`;

export const Welcome = styled.div`
  font-size: 12px;
  width: 70%;

  h1 span {
    color: ${theme.colors.orange[800]};
  }

  p {
    font-size: 12px;
  }
`;

export const UserArea = styled.div`
  display: flex;
  font-size: 14px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 30px 0 10px;

  .name {
    font-size: 16px;
    color: ${theme.colors.orange[800]};
  }
`;

export const IconLogout = styled.div`
  display: flex;
  align-items: center;

  svg {
    transition: color 0.3s;
  }

  svg:hover {
    transition: color 0.3s;
    color: ${theme.colors.orange[700]};
  }
`;
