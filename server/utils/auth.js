const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const { ApolloServer, gql } = require('apollo-server-express');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// GraphQL type definitions
const typeDefs = gql`
  type User {
    username: String
    email: String
    _id: ID
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Query {
    # Add any necessary queries
  }

  type Mutation {
    login(email: String, password: String): AuthPayload
    # Add other mutations (e.g., signup, logout)
  }
`;

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

// GraphQL resolvers
const resolvers = {
  Mutation: {
    login: async (parent, { email, password }) => {
      // Your login logic here
      // Verify email and password, and generate token

      // For simplicity, let's assume successful authentication
      const user = {
        username: 'john_doe',
        email: 'john@example.com',
        _id: '1',
      };

      const token = jwt.sign({ data: user }, secret, { expiresIn: expiration });

      return {
        token,
        user,
      };
    },
  },
};

// Apollo Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Apply the Apollo Server middleware to Express
server.applyMiddleware({ app });

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () =>
    console.log(`🌍 Now listening on localhost:${PORT}${server.graphqlPath}`)
  );
});
