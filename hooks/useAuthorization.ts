import { SignInRequest, SignUpRequest } from '../lib/types'
import { poster, fetcher } from '../util/api'
import useSwr from 'swr'

export const useSignIn = () => {
  return async (payload: SignInRequest) => {
    const mutation = {
      query:
        'mutation SignInMutation($email: String!, $password: String!) { signIn(input: { email: $email, password: $password }) { _id email name}}',
      variables: payload,
    }

    return poster(mutation)
  }
}

export const useSignUp = () => {
  return async (payload: SignUpRequest) => {
    const mutation = {
      query:
        'mutation SignUpMutation($name: String!, $email: String!, $password: String!) { signUp(input: { name: $name, email: $email, password: $password }) { _id email name } }',
      variables: payload,
    }

    return poster(mutation)
  }
}

export const useSignOut = () => {
  return async () => {
    const mutation = {
      query: 'mutation { signOut }',
    }
    return poster(mutation)
  }
}

export const useViewer = () => {
  const query = `query { viewer { name, email }}`

  return useSwr(query, fetcher)
}
