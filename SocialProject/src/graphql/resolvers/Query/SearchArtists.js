const ArtistModel = require("../../../models/ArtistModel")

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 */

module.exports = async (
  _,
  { criteria, sortProperty, offset = 0, limit = 20 }
) => {
  const artists = await ArtistModel.find(buildQuery(criteria))
    .sort({ [sortProperty]: 1 })
    .skip(offset)
    .limit(limit)

  const count = ArtistModel.find(buildQuery(criteria)).countDocuments()
  return { artists, offset, limit, count }
}

const buildQuery = (criteria) => {
  const { name, age, yearsActive } = criteria
  const query = {}

  if (name) {
    query.$text = { $search: name }
  }

  if (age) {
    query.age = {
      $gte: age.min,
      $lte: age.max,
    }
  }

  if (yearsActive) {
    query.yearsActive = {
      $gte: yearsActive.min,
      $lte: yearsActive.max,
    }
  }

  return query
}
