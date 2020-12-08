// RESOLVERS IMPORTS //
// # Queries
const FindArtist = require("./Query/FindArtist")
const SearchArtists = require("./Query/SearchArtists")
const GetAgeRange = require("./Query/GetAgeRange")
const GetYearsActiveRange = require("./Query/GetYearsActiveRange")
// # Mutations
const CreateArtist = require("./Mutation/CreateArtist")
const DeleteArtist = require("./Mutation/DeleteArtist")
const EditArtist = require("./Mutation/EditArtist")
const SetNotRetired = require("./Mutation/SetNotRetired")
const SetRetired = require("./Mutation/SetRetired")

/////////////////////////////////////////////////////////////////////////////

module.exports = {
  Query: {
    FindArtist,
    SearchArtists,
    GetAgeRange,
    GetYearsActiveRange,
  },
  Mutation: {
    CreateArtist,
    DeleteArtist,
    EditArtist,
    SetNotRetired,
    SetRetired,
  },
}
