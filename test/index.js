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
  const { users, articles, comments } = mongoose.connection.collections
  users.drop(() => articles.drop(() => comments.drop(() => done())))
})
