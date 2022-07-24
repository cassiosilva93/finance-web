import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  section + section {
    margin-left: 3px;
  }

  section:nth-child(1) {
    border-radius: 10px 0 0 10px;
  }

  section:last-child {
    border-radius: 0px 10px 10px 0px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .dashboard {
    border-radius: 10px 0 0 10px;
  }

  .transactions {
    border-radius: 0px 10px 10px 0px;
    margin-left: 3px;
  }
`;
