const { Schema, model } = require("mongoose")
const { SchemasConfig } = require("./config")

const AlbumSchema = new Schema({
  title: String,
  date: Date,
  copiesSold: Number,
  numberTracks: Number,
  image: String,
  revenue: Number,
})

const ArtistSchema = new Schema({
  name: String,
  image: String,
  age: Number,
  yearsActive: Number,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  albums: [AlbumSchema],
})

module.exports = model(SchemasConfig.Artist, ArtistSchema)
