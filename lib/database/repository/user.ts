import crypto from 'crypto'
import dbConnect from '../connect'
import User from '../schema/user'
import { UserType } from '../../types'

export const findUserWithPassword = async (
  email: string,
  password: string
): Promise<UserType | null> => {
  await dbConnect()

  const user = (await User.findOne({ email })) as UserType

  if (user) {
    const passwordMatched = await validatePassword(user, password)

    if (passwordMatched) {
      return user
    }
  }
  return null
}

export const createUser = async (
  name: String,
  email: string,
  password: any
): Promise<UserType | null> => {
  await dbConnect()
  const existingUser = await User.findOne({ email })

  if (existingUser) {
    throw new Error('Email is already in use')
  }

  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')

  const user = new User({ name, email, hash, salt })
  user.save()

  return user
}

type PasswordValidation = {
  salt: any
  hash: String
}

export const validatePassword = async (
  { salt, hash }: PasswordValidation,
  inputPassword: any
): Promise<Boolean> => {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, salt, 1000, 64, 'sha512')
    .toString('hex')
  const passwordsMatch = hash === inputHash
  return passwordsMatch
}
