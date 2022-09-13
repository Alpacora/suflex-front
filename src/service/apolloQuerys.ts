import { gql } from '@apollo/client';

export const GET_ALL = gql`
query Characters($page: Int, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
    results {
      id,
      name,
      status,
      gender,
      image,
      species,
      episode {
        id
      },
      created,
    }
  }
}
`;

export const LOGIN = gql`
  mutation Login($password: String!, $email: String!) {
    handleLogin(password: $password, email: $email) {
      id,
      name,
      email,
      createdAt,
      updatedAt,
    }
  }
`;

export const REGISTER = gql`
  mutation Register($name: String!, $password: String!, $email: String!) {
    handleCreateUser(name: $name, password: $password, email: $email) {
      id,
      name,
      email,
      createdAt,
    }
  }
`;
