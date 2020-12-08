const { Schema, model } = require("mongoose")
const { SchemasConfig } = require("../models/config")

const ArtistSchema = new Schema({})

module.exports = model(SchemasConfig.Artist, ArtistSchema)
