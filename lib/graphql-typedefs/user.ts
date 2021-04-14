import { gql } from '@apollo/client'

export default gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    createdAt: String!
  }

  input SignUpInput {
    name: String!
    email: String!
    password: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }

  extend type Query {
    users: [User]!
    user(id: ID!): User!
  }

  extend type Mutation {
    signUp(input: SignUpInput!): User!
    signIn(input: SignInInput!): User!
    signOut: Boolean!
  }
`
