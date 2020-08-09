// new -- utils is for non-React based code
import gql from 'graphql-tag';

export const QUERY_BOOKS = gql`
  query books($username: String) {
    books(username: $username) {
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

export const QUERY_BOOK = gql`
  query books($bookId: ID) {
    book(bookId: $bookId) {
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