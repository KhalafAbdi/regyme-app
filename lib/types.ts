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

export type ExerciseType = {
  _id: string
  name: string
  sets: Array<number>
  createdBy?: string
  createdAt?: Date
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

export type ExerciseRequest = {
  name: string
  sets: Array<number>
}

export interface Workout {
  _id: string
  name: string
  createdBy?: string
  createdAt?: Date
  exercises: Array<string>
  pictureUrl: string
}

export interface WorkoutRequest {
  name: string
  exercises: Array<string>
  pictureUrl: string
}
