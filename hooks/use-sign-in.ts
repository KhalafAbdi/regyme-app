import { SignInRequest } from '../lib/types'
import { poster } from '../lib/axios'

const useSignIn = () => {
  return async (payload: SignInRequest) => {
    const mutation = {
      query:
        'mutation signInMutation($email: String!, $password: String!) { signIn(input: { email: $email, password: $password }) { _id email name } }',
      variables: payload,
    }

    return poster(mutation)
  }
}

export default useSignIn
