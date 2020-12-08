// PLUGINS IMPORTS //

// MODELS IMPORTS //
const DriverModel = require("../../../models/DriverModel")

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

module.exports = {
  Query: {},
  Mutation: {
    async createDriver(_, { input }) {
      const driver = new DriverModel(input)
      await driver.save()

      return driver
    },

    async editDriver(_, { id, input }) {
      await DriverModel.findByIdAndUpdate(id, input)
      const driver = await DriverModel.findById(id)

      return driver
    },

    async deleteDriver(_, { id }) {
      const driver = await DriverModel.findByIdAndDelete(id)
      return driver
    },
  },
}
