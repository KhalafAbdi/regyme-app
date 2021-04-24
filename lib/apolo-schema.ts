import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs, resolvers } from './graphql'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
