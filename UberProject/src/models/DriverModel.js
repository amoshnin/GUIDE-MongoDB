const { Schema, model } = require("mongoose")
const { SchemasConfig } = require("./config")

const GeoPointSchema = new Schema({
  type: { type: String, default: "Point" },
  coordinates: { type: [Number], index: "2dsphere" },
})

const DriverSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  driving: {
    type: Boolean,
    default: false,
  },
  geometry: GeoPointSchema,
})

module.exports = model(SchemasConfig.Driver, DriverSchema)
