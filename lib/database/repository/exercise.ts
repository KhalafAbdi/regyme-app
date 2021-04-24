import dbConnect from '../connect'
import Exercise from '../schema/exercise'
import { ExerciseType, ExerciseRequest } from '../../types'

export const getAllExercises = async (
  userId: string
): Promise<Array<ExerciseType> | []> => {
  await dbConnect()

  return Exercise.find({ createdBy: userId })
}

export const findExercisesWithIDByUser = async (
  userId: string,
  exerciseId: string
) => {
  await dbConnect()

  const exercise = (await Exercise.findOne({
    _id: exerciseId,
    createdBy: userId,
  })) as ExerciseType

  return exercise
}

export const createExercise = async (
  userId: string,
  { name, sets }: ExerciseRequest
) => {
  await dbConnect()

  const exerciseWithNameExists = await Exercise.findOne({ name })

  if (exerciseWithNameExists) {
    throw new Error('You already have an exercise called that!')
  }
  const exercise = new Exercise({ name, sets, createdBy: userId })

  return await exercise.save()
}
