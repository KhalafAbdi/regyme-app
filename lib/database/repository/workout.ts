import dbConnect from '../connect'
import WorkoutSchema from '../schema/workout'
import { Workout, WorkoutRequest } from '../../types'

import { ObjectId } from 'mongodb'

export const getAllWorkouts = async (
  userId: string
): Promise<Array<Workout> | []> => {
  await dbConnect()

  const workouts = WorkoutSchema.find({ createdBy: new ObjectId(userId) })
  return workouts
}

export const getWorkoutWithIDByUser = async (
  userId: string,
  workoutId: string
) => {
  await dbConnect()
  const workout = WorkoutSchema.findOne({
    _id: new ObjectId(workoutId),
    createdBy: new ObjectId(userId),
  })

  return workout
}

export const createWorkout = async (
  userId: string,
  name: string,
  exercises: Array<string>,
  pictureUrl: string
) => {
  await dbConnect()

  const workoutWithNameExists = await WorkoutSchema.findOne({ name })

  if (workoutWithNameExists) {
    throw new Error('You already have an Workout called that!')
  }
  const workout = new WorkoutSchema({
    name,
    exercises,
    pictureUrl,
    createdBy: userId,
  })

  return await workout.save()
}
