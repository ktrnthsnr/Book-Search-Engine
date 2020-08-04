const express = require('express');
// -- new
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

// -- import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

// -- removed
//const routes = require('./routes'); 


const PORT = process.env.PORT || 3001;

const app = express();

// -- new 
// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

// -- new connect Apollo server middleware with Express 
server.applyMiddleware({ app });
// -- new set to true
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// -- removed
// -- if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }
//
// app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => 
    console.log(`🌍 Now listening on localhost:${PORT}`));
  // -- new log where we can go to test our GQL API
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
 
});

