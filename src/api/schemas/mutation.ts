import {gql} from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      __typename
      ... on CurrentUser {
        id
        identifier
      }
      ... on ErrorResult {
        message
      }
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation {
    logout {
      success
    }
  }
`;