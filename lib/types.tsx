export type SessionType = {
  _id: String
  name: String
  email: String
}

export type UserType = {
  _id: String
  name: String
  email: String
  hash: String
  salt: String
  createdAt: Date
}

export type SignInRequest = {
  email: String
  password: String
}

export type SignUpRequest = {
  name: String
  email: String
  password: String
}
