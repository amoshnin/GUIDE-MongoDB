const { Schema, model } = require("mongoose")
const { SchemasConfig } = require("./config")

const AlbumSchema = new Schema({
  title: String,
  date: String,
  copiesSold: Number,
  numberTracks: Number,
  image: String,
  revenue: Number,
})

module.exports = model(SchemasConfig.Album, AlbumSchema)
