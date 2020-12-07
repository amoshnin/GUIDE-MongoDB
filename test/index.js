const mongoose = require("mongoose")
const config = require("../src/config")

mongoose.Promise = global.Promise

before((done) => {
  mongoose
    .connect(config.MONGO_DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    })
    .then(() => done())
})

beforeEach((done) => {
  const { users, comments, blogposts } = mongoose.connection.collections
  users.drop(() => done())
})
