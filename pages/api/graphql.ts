import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../lib/apolo-schema'

const apolloServer = new ApolloServer({
  schema,
  context(ctx) {
    return ctx
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
