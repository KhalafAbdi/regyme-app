import { fetcher, poster } from '../util/api'
import useSwr from 'swr'
import { WorkoutRequest } from '../lib/types'

export const useWorkouts = () => {
  const query = `query { workouts { _id name exercises pictureUrl }}`

  const { data, error } = useSwr(query, fetcher)

  return { workouts: data?.workouts, error }
}

export const useCreateWorkout = () => {
  return async (payload: WorkoutRequest) => {
    const mutation = {
      query:
        'mutation CreateWorkoutMutation($name: String!, $exercises: [ID!]!, $pictureUrl: String!) { createWorkout(name: $name, exercises: $exercises, pictureUrl: $pictureUrl) { _id name exercises pictureUrl } }',
      variables: payload,
    }

    const { data } = await poster(mutation)

    return data
  }
}
