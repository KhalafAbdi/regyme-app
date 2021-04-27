import merge from 'deepmerge'

import userTypeDefs from './graphql-typedefs/user'
import userResolvers from './graphql-resolvers/user'

import exerciseTypeDefs from './graphql-typedefs/exercise'
import exerciseResolvers from './graphql-resolvers/exercise'

import workoutTypeDefs from './graphql-typedefs/workout'
import workoutResolvers from './graphql-resolvers/workout'

const baseTypeDefs = `type Query type Mutation`

export const typeDefs = [
  baseTypeDefs,
  userTypeDefs,
  exerciseTypeDefs,
  workoutTypeDefs,
]
export const resolvers = merge.all([
  userResolvers,
  exerciseResolvers,
  workoutResolvers,
])
