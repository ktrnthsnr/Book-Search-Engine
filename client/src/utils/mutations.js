// new -- GraphQL to gather changes to the client
import gql from 'graphql-tag';


// new - names to match /server's mutations resolvers

// new -- login user mutation, two variables: email, password
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
            _id
            username
      }
    }
  }
`;

// new -- add user mutation, three variables: email, pwd, username
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
            _id
            username
      }
    }
  }
`;


// new -- todo:  add save book mutation, from server/resolver
