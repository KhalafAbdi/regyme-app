import { gql } from '@apollo/client'
import merge from 'deepmerge'

import userTypeDefs from './graphql-typedefs/user'
import userResolvers from './graphql-resolvers/user'

const baseTypeDefs = gql`
  type Query
  type Mutation
`

export const typeDefs = [baseTypeDefs, userTypeDefs]
export const resolvers = merge({}, userResolvers)
