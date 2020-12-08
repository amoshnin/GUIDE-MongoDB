const { Schema, model } = require("mongoose")
const { SchemasConfig } = require("./config")

const ArticleSchema = new Schema({
  title: String,
  content: String,
  comments: [{ type: Schema.Types.ObjectId, ref: SchemasConfig.Comment }],
})

module.exports = model(SchemasConfig.Article, ArticleSchema)
