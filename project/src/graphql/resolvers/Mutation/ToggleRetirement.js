const ArtistModel = require("../../../models/ArtistModel")

/**
 * Sets a group of Artists as retired
 * @param {array} ids - An array of the _id's of of artists to update
 * @return {promise} A promise that resolves after the update
 */
module.exports = async (_, { ids, status }) => {
  await ArtistModel.updateMany({ _id: { $in: ids } }, { retired: status })
  return ids
}
