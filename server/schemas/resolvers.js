// import User and Book models
const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
          // helloWorld: () => {
            // return 'Hello world!';

        me: async (parent, args, context) => {
          if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })
              .select('-__v -password')
              .populate('books')
        
            return userData;
          }
        
          throw new AuthenticationError('Not logged in');
        },

        // get all users
        users: async () => {
          return User.find()
            .select('-__v -password')
            .populate('books');
        },

        books: async (parent, { username }) => {
          const params = username ? { username } : {};
          return Book.find(params).sort({ createdAt: -1 });
        },

        book: async (parent, { _id }) => {
          return Book.findOne({ _id });
        }
    },

    // mutation object, the Mongoose User model creates a new user in the db with args values
      // test in queryql playground 'npm run watch' 
    Mutation: {

      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
      
        return user;
      },

      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
      
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }

        const token = signToken(user);
        return user;
      },

      //methods created after adding JWT, 
      
      // only logged in users w/ a token should be able to access this mutation 
      saveBook: async (parent, args, context) => {
        if (context.user) {
          const book = await Book.create({ ...args, username: context.user.username });
      
          await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { books: book._id } },
            { new: true }
          );
      
          return book;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      },
    

    //   removeBook: async (parent, { bookId }, context) => {
    //     if (context.user) {
    //       const updatedBook = await Book.findOneAndUpdate(
    //         { _id: bookId },
    //         { $push: { books: { books } } },
    //         { new: true, runValidators: true }
    //       );
      
    //       return updatedBook;
    //     }
      
    //     throw new AuthenticationError('Error removing a book!');
    //   },
    

  }
};
  
  
  //export
  module.exports = resolvers;