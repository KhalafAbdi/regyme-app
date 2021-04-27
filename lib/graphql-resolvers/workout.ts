import {
  getAllWorkouts,
  getWorkoutWithIDByUser,
  createWorkout,
} from '../database/repository/workout'
import Session from '../session'
import { getS3SignedUrl } from '../aws'
import { WorkoutRequest } from '../types'

export default {
  Query: {
    async workouts(_parent: any, _args: any, _context: any, _info: any) {
      const userId = await Session.getUserId(_context.req)

      return getAllWorkouts(userId)
    },
    async workout(_parent: any, _args: any, _context: any, _info: any) {
      const { id: workoutId } = _args
      const userId = await Session.getUserId(_context.req)

      return getWorkoutWithIDByUser(userId, workoutId)
    },
  },
  Mutation: {
    async signS3(_parent: any, _args: any, _context: any, _info: any) {
      const { filename, filetype } = _args
      const userId = await Session.getUserId(_context.req)

      return await getS3SignedUrl(filename, filetype, userId)
    },
    async createWorkout(_parent: any, _args: any, _context: any, _info: any) {
      const { name, exercises, pictureUrl }: WorkoutRequest = _args
      const userId = await Session.getUserId(_context.req)

      return createWorkout(userId, name, exercises, pictureUrl)
    },
  },
}
