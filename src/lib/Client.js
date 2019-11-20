import { split } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { ApolloClient } from 'apollo-client'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Storage } from '../lib'

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_WS_ENDPOINT,
  options: {
    reconnect: true,
  },
})

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_HTTP_ENDPOINT
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const login = Storage.login
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: login ? `Bearer ${login.token}` : '',
    }
  }
})

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  authLink.concat(httpLink),
)

export default new ApolloClient({
  cache: new InMemoryCache(),
  link,
})