const { Schema, model } = require("mongoose")

const CommentSchema = new Schema({})

module.exports = model("Comment", CommentSchema)
