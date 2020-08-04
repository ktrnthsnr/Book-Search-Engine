// import the gql tagged template function
const { gql } = require('apollo-server-express');


// User, Book, Query, Mutation, Auth queries
const typeDefs = gql`

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(bookId: ID!): Book
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID
    authors(authors: String): [Author]
    description: String
    title: String
    image: String
    link: String
  }

 
  type Mutation {    
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(title: String!): User
    removeBook(bookId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
