// PLUGINS IMPORTS //

// MODELS IMPORTS //
const ArtistModel = require("../../../models/ArtistModel")
const { UserInputError } = require("apollo-server")

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

/**
 * Finds a single artist in the artist collection.
 * @param {string} _id - The ID of the record to find.
 * @return {promise} A promise that resolves with the Artist that matches the id
 */

module.exports = async (_, { id }) => {
  const artist = await ArtistModel.findById(id)
  if (artist) {
    return artist
  } else {
    throw new UserInputError("Artist with given 'id' not found")
  }
}
