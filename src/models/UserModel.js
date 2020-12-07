const { model, Schema } = require("mongoose")

const PostSchema = new Schema({
  title: String,
})

// -- EXPORTED ----------------------------->
const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (text) => text.length > 2,
      message: "Name must be longer than 2 characters",
    },
    required: [true, "Name is required"],
  },
  posts: [PostSchema],
})

UserSchema.virtual("postCount").get(function () {
  return this.posts.length
})

module.exports = model("User", UserSchema)
