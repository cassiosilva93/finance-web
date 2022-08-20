import { gql } from '@apollo/client';

export const LOGIN = gql`
  query Login($data: UserLoginInput) {
    login(data: $data) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;
