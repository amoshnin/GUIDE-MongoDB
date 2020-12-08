const { gql } = require("apollo-server")

module.exports = gql`
  type Query {
    s: String!
  }
  type Mutation {
    createDriver(input: InputCreateDriver!): DriverSchema!
    editDriver(id: String!, input: InputCreateDriver!): DriverSchema!
    deleteDriver(id: String!): DriverSchema!
  }

  # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  # Inputs
  input InputCreateDriver {
    email: String!
  }

  # Returns

  # # # # # # # # # # # # # # # # # # # # # # # # # # # #
  type DriverSchema {
    email: String!
    driving: Boolean!
  }
`
