const { Schema, model } = require("mongoose")

const ArticleSchema = new Schema({})

module.exports = model("Article", ArticleSchema)
