import { gql } from '@apollo/client'

export default gql`
  type Exercise {
    _id: ID
    name: String
    sets: [Int]
    createdBy: ID
    createdAt: String
  }

  extend type Query {
    exercises: [Exercise]!
    exercise(id: ID!): Exercise
  }

  input ExerciseInput {
    name: String!
    sets: [Int]!
  }

  extend type Mutation {
    createExercise(input: ExerciseInput!): Exercise
  }
`
