// new -- utils is for non-React based code
import gql from 'graphql-tag';

export const GET_ME = gql`
{
  me {
      _id
      username
      email
      bookCount
      savedBooks {
          #_id
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

// export const QUERY_BOOK = gql`
//   query books($bookId: ID) {
//     book(bookId: $bookId) {
//       bookId
//       title
//       authors
//       description
//       image
//       link
//       }
//     }
//   }
// `;