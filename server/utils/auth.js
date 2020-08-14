const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {

    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },

       // authMiddleware: function (req, res, next) {
        authMiddleware: function({ req }) {
      // -- allows token to be sent via req.body, req.query, or headers
          // let token = req.query.token || req.headers.authorization;
          let token = req.body.token || req.query.token || req.headers.authorization;

    // separate "Bearer" from "<tokenvalue>"
      if (req.headers.authorization) {
        token = token
          .split(' ')
          .pop()
          .trim();
      }

    // if no token, return request object as is
      if (!token) {
        return req;
        //  return res.status(400).json({ message: 'You have no token!' });
      }
      try {
        // decode and attach user data to request object
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
      } catch {
        console.log('Invalid token');
        // return res.status(400).json({ message: 'invalid token!' });
      }
    // return updated request object
      return req;
          // next();
   }

    // signToken: function ({ username, email, _id }) {
    //     const payload = { username, email, _id };
    //     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });    
    // };
};

