const ArtistModel = require("../../../models/ArtistModel")

const getRangeValues = async (value) => {
  const minSorted = await ArtistModel.find({})
    .sort({ [value]: 1 })
    .limit(1)
  const min = minSorted[0][value]

  const maxSorted = await ArtistModel.find({})
    .sort({ [value]: -1 })
    .limit(1)
  const max = maxSorted[0][value]

  return { min, max }
}

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
const GetYearsActiveRange = async () => {
  return await getRangeValues("yearsActive")
}

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
const GetAgeRange = async () => {
  return await getRangeValues("age")
}

module.exports = { GetYearsActiveRange, GetAgeRange }
