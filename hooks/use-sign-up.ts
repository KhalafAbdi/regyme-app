import { poster } from '../util/api'
import { SignUpRequest } from '../lib/types'

const query = (payload: SignUpRequest) => {
  const mutation = {
    query:
      'mutation SignUpMutation($name: String!, $email: String!, $password: String!) { signUp(input: { name: $name, email: $email, password: $password }) { _id email name } }',
    variables: payload,
  }

  return mutation
}

const useSignUp = () => {
  return async (payload: SignUpRequest) => {
    return poster(query(payload))
  }
}

export default useSignUp
