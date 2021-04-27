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
        'mutation CreateExerciseMutation($name: String!, $sets: [Int]!) { createExercise(input: { name: $name, sets: $sets }) { _id name sets } }',
      variables: payload,
    }

    const { data } = await poster(mutation)

    return data
  }
}
