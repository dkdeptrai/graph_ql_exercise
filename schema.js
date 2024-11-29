// schema.js
const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    description: String
  }

  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    updateUserDescription(id: ID!, description: String!): User
    addUser(username: String!, description: String): User
  }
`;

module.exports = typeDefs;
