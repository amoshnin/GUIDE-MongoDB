const { model, Schema } = require("mongoose")

const UserSchema = new Schema({
  name: String,
  postCount: Number,
})

module.exports = model("User", UserSchema)
