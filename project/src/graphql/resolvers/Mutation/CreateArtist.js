const ArtistModel = require("../../../models/ArtistModel")

/**
 * Finds a single artist in the artist collection.
 * @param {object} artistProps - Object containing a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves with the Artist that was created
 */
module.exports = async (_, { input }) => {
  const artist = new ArtistModel(input)
  await artist.save()

  return artist
}
