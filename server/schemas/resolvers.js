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
              // .populate('books')        
            return userData;
          }        
          throw new AuthenticationError('Not logged in');
        },
      },

        // removed --- ??
            //     // get all users
            //     users: async () => {
            //       return User.find()
            //         .select('-__v -password')
            //         .populate('books');
            //     },

            //     books: async (parent, { username }) => {
            //       const params = username ? { username } : {};
            //       return Book.find(params).sort({ createdAt: -1 });
            //     },

            //     book: async (parent, { bookId }) => {
            //       return Book.findOne({ bookId });
            //     }
            // },


    // mutation object, the Mongoose User model creates a new user in the db with args values
      // test in queryql playground 'npm run watch' 
    Mutation: {

      addUser: async ( parent, args ) => {
          const user = await User.create( args );
          const token = signToken( user );    
          return { token, user };  // fixed user/token
        },

      login: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
         const correctPassword = await user.isCorrectPassword(password); 
         const token = signToken(user);       
          if (!user) {
            throw new AuthenticationError('Incorrect credentials, try again!');
          }        
          if (!correctPassword) {
            throw new AuthenticationError('Incorrect credentials, try again!');
          }
          return { token, user }; // fixed user/token
      },

      //methods created after adding JWT,       
      saveBook: async (parent, { input }, context) => {
        if (context.user) {
        const savedBookUser = await User.findOneAndUpdate (
            { _id: context.user._id },
            { $push: { savedBooks: input  } },
            { new: true, runValidators: true }
          );
        return { savedBookUser };
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      
      removeBook: async (parent, {bookId}, context) => {
          const savedBookUser = await User.findOneAndUpdate (
            { _id: context.user._id },
            { $pull: { savedBooks: { bookId: bookId } } },
            { new: true }
          );
          return  savedBookUser;
      },
   }
};
  
  
  //export
  module.exports = resolvers;