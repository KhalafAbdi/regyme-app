import merge from 'deepmerge'

import userTypeDefs from './graphql-typedefs/user'
import userResolvers from './graphql-resolvers/user'

const baseTypeDefs = `type Query type Mutation`

export const typeDefs = [baseTypeDefs, userTypeDefs]
export const resolvers = merge({}, userResolvers)
