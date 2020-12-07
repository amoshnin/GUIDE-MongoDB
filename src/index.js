// PLUGINS IMPORTS //
const { ApolloServer } = require("apollo-server")
const mongoose = require("mongoose")

// COMPONENTS IMPORTS //
const typeDefs = require("./graphql/typeDefs")
const resolvers = require("./graphql/resolvers")

// CONFIG IMPORTS //
const config = require("./config")

/////////////////////////////////////////////////////////////////////////////

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

mongoose
  .connect(config.MONGO_DB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connected")
    server
      .listen({ port: 5000 })
      .then((res) => console.log(`Server running at ${res.url}`))
  })
  .catch((error) => console.log(error))
