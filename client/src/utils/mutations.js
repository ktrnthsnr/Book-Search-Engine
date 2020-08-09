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
  mutation saveBook($input:savedBook!) {
    saveBook (input:$input)
        {
        _id
        username
        email
        bookCount
        savedBooks {
            # _id
            bookId
            title
            authors
            description
            image
            link
        }
     }
  }      
`;

// new -- remove book mutation, with bookId as the variable
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
            username
            email
            bookCount
            savedBooks {
                # _id
                bookId
                title
                authors
                description
                image
                link      
                }
              }
           }
    `;
