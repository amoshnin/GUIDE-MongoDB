const { gql } = require("apollo-server")

module.exports = gql`
  type Query {
    getDrivers(lng: Float!, lat: Float!): [DriverModel]!
  }
  type Mutation {
    createDriver(input: InputCreateDriver!): DriverModel!
    editDriver(id: String!, input: InputCreateDriver!): DriverModel!
    deleteDriver(id: String!): DriverModel!
  }

  # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  # Inputs
  input InputCreateDriver {
    email: String!
    geometry: InputGeoPoint
  }

  input InputGeoPoint {
    type: String!
    coordinates: [Float!]!
  }

  # Returns

  # # # # # # # # # # # # # # # # # # # # # # # # # # # #
  type DriverModel {
    email: String!
    driving: Boolean!
    geometry: GeoPointType!
  }

  type GeoPointType {
    type: String!
    coordinates: [Float!]!
  }
`
