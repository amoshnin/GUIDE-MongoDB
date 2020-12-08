const { gql } = require("apollo-server")

module.exports = gql`
  type Query {
    FindArtist(id: String!): ArtistType!
    SearchArtists(
      criteria: InputArtistSearchType
      sortProperty: String!
      offset: Int
      limit: Int
    ): ReturnSearchType!
    GetAgeRange: ReturnYearsRangeType!
    GetYearsActiveRange: ReturnYearsRangeType!
  }
  type Mutation {
    CreateArtist(input: InputArtistType!): ArtistType!
    DeleteArtist(id: String!): ArtistType!
    EditArtist(id: String!, input: InputArtistType!): ArtistType!
    SetNotRetired: String!
    SetRetired: String!
  }

  # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  # Inputs #
  input InputArtistType {
    name: String!
    age: Int!
    yearsActive: Int!
    genre: String!
  }

  input InputArtistSearchType {
    name: String
    age: InputYearsRangeType
    yearsActive: InputYearsRangeType
  }

  input InputYearsRangeType {
    min: Int!
    max: Int!
  }

  # Returns
  type ReturnSearchType {
    artists: [ArtistType]!
    count: Int!
    offset: Int!
    limit: Int!
  }

  type ReturnYearsRangeType {
    min: Int!
    max: Int!
  }

  # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  # Artist
  type ArtistType {
    name: String!
    age: Int!
    yearsActive: Int!
    genre: String!
    image: String
    website: String
    netWorth: Int
    labelName: String
    retired: Boolean
    albums: [AlbumType]
  }

  # Album
  type AlbumType {
    id: ID!
    title: String!
    date: String!
    copiesSold: Int!
    numberTracks: Int!
    image: String!
    revenue: Int!
  }
`
