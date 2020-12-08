// PLUGINS IMPORTS //
const { ApolloServer } = require("apollo-server")
const mongoose = require("mongoose")

// COMPONENTS IMPORTS //
const typeDefs = require("./graphql/typeDefs")
const resolvers = require("./graphql/resolvers")

// CONFIG IMPORTS //
const { MONGO_DB } = require("./config")

/////////////////////////////////////////////////////////////////////////////

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

mongoose
  .connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected")
    server
      .listen({ port: 4999 })
      .then((res) => console.log(`Server running at ${res.url}`))
  })
  .catch((error) => console.log(error))
