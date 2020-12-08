const { Schema, model } = require("mongoose")
const { SchemasConfig } = require("./config")

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
  albums: [{ type: Schema.Types.ObjectId, ref: SchemasConfig.Album }],
})

module.exports = model(SchemasConfig.Artist, ArtistSchema)
