// RESOLVERS IMPORTS //
// # Queries
const FindArtist = require("./Query/FindArtist")
const SearchArtists = require("./Query/SearchArtists")
const GetAgeRange = require("./Query/GetRanges")
// # Mutations
const CreateArtist = require("./Mutation/CreateArtist")
const DeleteArtist = require("./Mutation/DeleteArtist")
const EditArtist = require("./Mutation/EditArtist")
const ToggleRetirement = require("./Mutation/ToggleRetirement")

/////////////////////////////////////////////////////////////////////////////

module.exports = {
  Query: {
    FindArtist,
    SearchArtists,
    ...GetAgeRange,
  },
  Mutation: {
    CreateArtist,
    DeleteArtist,
    EditArtist,
    ToggleRetirement,
  },
}
