import { fetcher, poster } from '../util/api'
import useSwr from 'swr'
import { ExerciseRequest } from '../lib/types'

export const useExercises = () => {
  const query = `query { exercises { _id name sets }}`

  const { data: test, error } = useSwr(query, fetcher)
  const exercises = test ? test.exercises : null

  return { exercises, error }
}

export const useCreateExercise = () => {
  return async (payload: ExerciseRequest) => {
    const { data, error } = await poster(query(payload))

    if (data?.createExercise?._id) {
      return true
    }

    return false
  }
}

const query = (payload: ExerciseRequest) => {
  const mutation = {
    query:
      'mutation CreateExerciseMutation($name: String!, $sets: [Int]!) { createExercise(input: { name: $name, sets: $sets }) { _id name sets } }',
    variables: payload,
  }

  return mutation
}
