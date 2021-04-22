export type SessionType = {
  _id: string
  name: string
  email: string
}

export type UserType = {
  _id: string
  name: string
  email: string
  hash: string
  salt: string
  createdAt: Date
}

export type SignInRequest = {
  email: string
  password: string
}

export type SignUpRequest = {
  name: string
  email: string
  password: string
}

}
