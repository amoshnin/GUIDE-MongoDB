const { gql } = require("apollo-server")

module.exports = gql`
  type Query {
    FindArtist(id: String!): ArtistType!
    SearchArtists(
      criteria: ArtistInputType!
      sortProperty: String!
      offset: Int
      limit: Int
    ): ReturnSearchType!
    GetAgeRange: ReturnYearsRangeType!
    GetYearsActiveRange: ReturnYearsRangeType!
  }
  type Mutation {
    CreateArtist(input: ArtistInputType!): ArtistType!
    DeleteArtist(id: String!): ArtistType!
    EditArtist(id: String!, input: ArtistInputType!): ArtistType!
    SetNotRetired: String!
    SetRetired: String!
  }

  # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  # Inputs #
  input ArtistInputType {
    name: String!
    age: Int!
    yearsActive: Int!
    genre: String!
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
