import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import ReduxThunk from "redux-thunk"
import reducers from "./reducers"
import Routes from "./router"
import mongoose from "mongoose"
import "./seeds"
import { MONGO_DB } from "../config"

import { ApolloServer } from "apollo-server"

import typeDefs from "../database/graphql/typeDefs"
import resolvers from "../database/graphql/resolvers"

mongoose.Promise = Promise

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

mongoose
  .connect(MONGO_DB, { useNewUrlParser: true })
  .then(() => {
    console.log("Success connection")
    server.listen({ port: 5000 }).then((res) => {
      console.log(`Server running at ${res.url}`)
      ReactDOM.render(<App />, document.getElementById("root"))
    })
  })
  .catch((error) => console.log(error))
