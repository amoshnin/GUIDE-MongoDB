const { Schema, model } = require("mongoose")
const { SchemasConfig } = require("./config")

const CommentSchema = new Schema({
  content: String,
  user: { type: Schema.Types.ObjectId, ref: SchemasConfig.User },
})

module.exports = model(SchemasConfig.Comment, CommentSchema)
