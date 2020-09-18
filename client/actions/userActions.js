import { gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
  query {
    currentUser {
      id
      email
    }
  }
`;

export const SIGN_UP_USER = gql`
  mutation SignUp($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
      id
      email
    }
  }
`;

export const LOG_IN_USER = gql`
  mutation LogIn($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
      id
      email
    }
  }
`;

export const LOG_OUT_USER = gql`
  mutation {
    logOut {
      id
      email
    }
  }
`;
