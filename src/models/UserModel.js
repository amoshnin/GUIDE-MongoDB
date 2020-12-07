const { model, Schema } = require("mongoose")

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  postCount: Number,
})

module.exports = model("User", UserSchema)
