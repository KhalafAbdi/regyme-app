import { poster } from '../lib/axios'

const useSignOut = () => {
  return async () => {
    const mutation = {
      query: 'mutation { signOut }',
    }

    return poster(mutation)
  }
}

export default useSignOut
