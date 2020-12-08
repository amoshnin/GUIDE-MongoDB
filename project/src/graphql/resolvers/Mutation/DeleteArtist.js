const ArtistModel = require("../../../models/ArtistModel")

/**
 * Deletes a single artist from the Artists collection
 * @param {string} _id - The ID of the artist to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */
module.exports = async (_, { id }) => {
  const user = await ArtistModel.findByIdAndDelete(id)
  return user
}
