const { Schema, model } = require("mongoose")
const { SchemasConfig } = require("./config")

const DriverSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  driving: {
    type: Boolean,
    default: false,
  },
})

module.exports = model(SchemasConfig.Driver, DriverSchema)
