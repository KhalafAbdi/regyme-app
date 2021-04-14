import { SignUpRequest } from '../lib/types'
import { poster } from '../lib/axios'

const useSignIn = () => {
  return async (payload: SignUpRequest) => {
    const mutation = {
      query:
        'mutation signInMutation($name: String!, $email: String!, $password: String!) { signUp(input: { name: $name, email: $email, password: $password }) { _id email name } }',
      variables: payload,
    }

    return poster(mutation)
  }
}

export default useSignIn
