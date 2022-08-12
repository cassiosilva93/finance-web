import theme from '@src/theme';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 120px;
  background-color: ${theme.colors.gray[900]};

  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  @media (max-width: 998px) and (max-width: 840px) {
    padding: 15px 50px 0 50px;

    .welcome {
      display: none;
    }
  }

  @media (min-width: 768px) {
    padding-bottom: 15px;
  }

  @media (max-width: 426px) {
    padding: 15px 20px 0 20px;
    padding-bottom: 15px;
  }
`;

export const Welcome = styled.div`
  font-size: 0.75rem;
  width: 70%;

  h1 span {
    color: ${theme.colors.orange[800]};
  }

  p {
    font-size: 0.75rem;
  }
`;

export const UserArea = styled.div`
  display: flex;
  font-size: 0.87rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 30px 0 10px;

  .name {
    font-size: 1rem;
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
