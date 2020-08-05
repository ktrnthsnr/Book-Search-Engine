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