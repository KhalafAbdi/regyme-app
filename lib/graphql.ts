import merge from 'deepmerge'

import userTypeDefs from './graphql-typedefs/user'
import userResolvers from './graphql-resolvers/user'

import exerciseTypeDefs from './graphql-typedefs/exercise'
import exerciseResolvers from './graphql-resolvers/exercise'

const baseTypeDefs = `type Query type Mutation`

export const typeDefs = [baseTypeDefs, userTypeDefs, exerciseTypeDefs]
export const resolvers = merge(userResolvers, exerciseResolvers)
