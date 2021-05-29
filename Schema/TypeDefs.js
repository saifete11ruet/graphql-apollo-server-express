const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    name: String!
    email: String!
    sex: String!
    age: Int!
    married: Boolean!
  }

  # Queries
  type Query {
    getAllUsers: [User!]!
    getFilteredUsers(
      name: String
      email: String
      age: Int
      sex: String
      married: Boolean
    ): [User]
  }

  # Mutations
  type Mutation {
    createUser(
      name: String!
      email: String!
      age: Int!
      sex: String!
      married: Boolean!
    ): User!
  }
`

module.exports = typeDefs
