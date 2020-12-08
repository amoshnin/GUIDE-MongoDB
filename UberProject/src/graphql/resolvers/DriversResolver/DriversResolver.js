// PLUGINS IMPORTS //

// MODELS IMPORTS //
const DriverModel = require("../../../models/DriverModel")

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

module.exports = {
  Query: {
    async getDrivers(_, { lng, lat }) {
      const drivers = await DriverModel.find({
        geometry: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [lng, lat],
            },
            $maxDistance: 20001200,
            $minDistance: 0,
          },
        },
      })

      console.log(drivers)
      return drivers
    },
  },

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
