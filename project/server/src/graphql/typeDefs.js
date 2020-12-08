const { gql } = require("apollo-server")

module.exports = gql`
  type Query {
    FindArtist: ArtistType!
    SearchArtists: [ArtistType]!
    GetAgeRange: Int!
    GetYearsActiveRange: Int!
  }
  type Mutation {
    CreateArtist: ArtistType!
    DeleteArtist: ArtistType!
    EditArtist: ArtistType!
    SetNotRetired: String!
    SetRetired: String!
  }

  # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  # Artist
  type ArtistType {
    name: String!
    image: String!
    age: Int!
    yearsActive: Int!
    genre: String!
    website: String!
    netWorth: Int!
    labelName: String!
    retired: Boolean!
    albums: [AlbumType]!
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
