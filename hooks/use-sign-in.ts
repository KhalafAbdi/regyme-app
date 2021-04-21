import { SignInRequest } from '../lib/types'
import { poster } from '../util/api'

const query = (payload: SignInRequest) => {
  const mutation = {
    query:
      'mutation SignInMutation($email: String!, $password: String!) { signIn(input: { email: $email, password: $password }) { _id email name}}',
    variables: payload,
  }

  return mutation
}

const useSignIn = () => {
  return async (payload: SignInRequest) => {
    return poster(query(payload))
  }
}

export default useSignIn
