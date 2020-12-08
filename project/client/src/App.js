import React from "react"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducers from "./redux/reducers"
import Routes from "./router"
import "./seeds"

// APOLLO IMPORTS //
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { ApolloProvider } from "@apollo/client"

import typeDefs from "../database/graphql/typeDefs"
import resolvers from "../database/graphql/resolvers"

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
})
const App = () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })

  const store = createStore(reducers, {}, applyMiddleware(thunk))

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ApolloProvider>
  )
}

export default App
