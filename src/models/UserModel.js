const { Schema, model } = require("mongoose")
const { SchemasConfig } = require("./config")

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
  likes: Number,
  articles: [{ type: Schema.Types.ObjectId, ref: SchemasConfig.Article }],
})

UserSchema.virtual("postCount").get(function () {
  return this.posts.length
})

UserSchema.pre("remove", async function () {
  const article = model(SchemasConfig.Article)
  // this === joe

  await article.remove({ _id: { $in: this.articles } })
})

module.exports = model(SchemasConfig.User, UserSchema)
