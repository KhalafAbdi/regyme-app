import type { NextApiRequest, NextApiResponse } from 'next'
import Iron from '@hapi/iron'
import { SessionType } from './types'

import {
  MAX_AGE,
  setTokenCookie,
  getTokenCookie,
  removeTokenCookie,
} from './cookie'

const TOKEN_SECRET = process.env.TOKEN_SECRET || ''

const getLogginSession = async (req: NextApiRequest) => {
  const token = getTokenCookie(req)

  if (!token) return

  const session = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults)
  const expiresAt = session.createdAt + session.maxAge * 1000

  if (Date.now() > expiresAt) {
    throw new Error('Session expired')
  }

  return session
}

const getUserId = async (req) => {
  const session = await getLogginSession(req)

  if (!session) {
    throw new Error('Not logged in')
  }
  return session._id
}

const setLogginSession = async (res: NextApiResponse, session: SessionType) => {
  const createdAt = Date.now()

  const obj = { ...session, createdAt, maxAge: MAX_AGE }
  const token = await Iron.seal(obj, TOKEN_SECRET, Iron.defaults)

  setTokenCookie(res, token)
}

const clearLogginSession = async (res: NextApiResponse) => {
  removeTokenCookie(res)
}
const dumpLogginSession = async (req: NextApiRequest) => {
  return JSON.stringify(req)
}

export default {
  getLogginSession,
  getUserId,
  setLogginSession,
  clearLogginSession,
  dumpLogginSession,
}
