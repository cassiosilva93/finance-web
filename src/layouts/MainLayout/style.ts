import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  padding: 100px 120px 0 120px;

  section + section {
    margin-left: 3px;
  }

  section:nth-child(1) {
    border-radius: 10px 0 0 10px;
  }

  section:last-child {
    border-radius: 0px 10px 10px 0px;
  }

  @media (max-width: 1150px) {
    flex-wrap: wrap;
    padding: 100px 120px 0 120px;

    section {
      width: 100%;
    }

    section + section {
      margin-left: 0;
      margin-top: 3px;
    }

    section:nth-child(1) {
      border-radius: 10px 10px 0 0;
    }

    section:last-child {
      border-radius: 0 0 10px 10px;
    }
  }

  @media (max-width: 768px) {
    padding: 100px 50px 0 50px;
  }

  @media (max-width: 426px) {
    padding: 100px 20px 0 20px;
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

  @media (max-width: 426px) {
    flex-direction: column;

    a {
      padding: 0 20px 0 20px;

      button {
        width: 100% !important;
        border-radius: 5px !important;
        margin-left: 0 !important;
      }
    }

    a + a {
      margin-top: 5px;
    }
  }
`;
