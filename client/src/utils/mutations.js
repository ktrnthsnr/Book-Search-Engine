// new -- GraphQL to gather changes to the client
import gql from 'graphql-tag';


// new - names to match /server's mutations resolvers

// new -- login user mutation, two variables: email, password
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
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


// new -- add save book mutation, with title as the variable

export const SAVE_BOOK = gql`
  mutation saveBook($title: String!) {
    saveBook(title: $title) {
        book {
            bookId
            title
      }
    }
  }
`;

// new -- remove book mutation, with bookId as the variable
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(id: $bookId) {
        book {
            bookId
      }
    }
  }
`;
