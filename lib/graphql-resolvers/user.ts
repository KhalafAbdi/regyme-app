import { findUser, createUser } from '../database/repository/user'
import Session from '../session'

export default {
  Query: {
    async users() {},
    async user() {},
    async viewer(_parent: any, _args: any, _context: any, _info: any) {
      const { req } = _context

      const session = await Session.getLogginSession(req)

      if (session) {
        return { name: session.name, email: session.email }
      }

      return {}
    },
  },
  Mutation: {
    async signUp(_parent: any, _args: any, _context: any, _info: any) {
      const {
        name: nameInput,
        email: emailInput,
        password: passwordInput,
      } = _args.input

      //TODO: Validate input

      const user = await createUser(nameInput, emailInput, passwordInput)

      if (!user) {
        throw new Error('User could not be created, try again later')
      }

      const { _id, name, email } = user
      await Session.setLogginSession(_context.res, { _id, name, email })

      return user
    },
    async signIn(_parent: any, _args: any, _context: any, _info: any) {
      const { email: emailInput, password: passwordInput } = _args.input
      //TODO: Validate input

      const user = await findUser(emailInput, passwordInput)

      if (!user) {
        throw new Error('Invalid email and password combination')
      }

      const { _id, name, email } = user
      await Session.setLogginSession(_context.res, { _id, name, email })

      return user
    },
    async signOut(_parent: any, _args: any, _context: any, _info: any) {
      Session.clearLogginSession(_context.res)
      return true
    },
  },
}
