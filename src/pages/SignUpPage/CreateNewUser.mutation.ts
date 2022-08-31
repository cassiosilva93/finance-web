import { gql } from '@apollo/client';

export const CREATE_NEW_USER = gql`
  mutation CreateNewUser($name: String!, $email: String!, $password: String!) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
    }
  }
`;
