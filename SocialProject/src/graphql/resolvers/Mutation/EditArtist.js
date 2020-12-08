const ArtistModel = require("../../../models/ArtistModel")
const { UserInputError } = require("apollo-server")

/**
 * Edits a single artist in the Artists collection
 * @param {string} _id - The ID of the artist to edit.
 * @param {object} artistProps - An object with a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves when the record is edited
 */
module.exports = async (_, { id, input }) => {
  const artist = await ArtistModel.findByIdAndUpdate(id, input)

  if (artist) {
    return { ...artist, ...input }
  } else throw new UserInputError("Artist not found")
}
