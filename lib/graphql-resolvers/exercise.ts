import Session from '../session'
import {
  getAllExercises,
  createExercise,
} from '../database/repository/exercise'

export default {
  Query: {
    async exercises(_parent: any, _args: any, _context: any, _info: any) {
      const { req } = _context
      const session = await Session.getLogginSession(req)

      let res

      if (session) {
        res = await getAllExercises(session._id)
      }
      return res
    },
    async exercise(_parent: any, _args: any, _context: any, _info: any) {},
  },
  Mutation: {
    async createExercise(_parent: any, _args: any, _context: any, _info: any) {
      const { req } = _context
      const session = await Session.getLogginSession(req)

      if (session) {
        const res = await createExercise(session._id, _args.input)

        return res
      }
      return {}
    },
  },
}
