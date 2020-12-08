// RESOLVERS IMPORTS //
const DriversResolver = require("./DriversResolver/DriversResolver")

/////////////////////////////////////////////////////////////////////////////

module.exports = {
  Query: {
    ...DriversResolver.Query,
  },
  Mutation: {
    ...DriversResolver.Mutation,
  },
}
