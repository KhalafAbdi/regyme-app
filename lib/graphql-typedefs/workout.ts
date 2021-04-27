import { gql } from '@apollo/client'

export default gql`
  type Workout {
    _id: ID
    name: String
    createdAt: String
    createdBy: ID
    exercises: [ID!]
    pictureUrl: String
  }

  type S3Payload {
    signeRequest: String!
    url: String!
  }

  input WorkoutUpdateInput {
    id: ID
    name: String
    exercises: [ID]
    pictureUrl: String
  }

  extend type Query {
    workouts: [Workout]
    workout(id: ID!): Workout
  }

  extend type Mutation {
    signS3(filename: String!, filetype: String!): S3Payload!
    createWorkout(
      name: String!
      exercises: [ID!]!
      pictureUrl: String!
    ): Workout
  }
`
