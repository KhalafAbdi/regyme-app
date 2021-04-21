import { poster } from '../util/api'

const query = () => {
  const mutation = {
    query: 'mutation { signOut }',
  }

  return mutation
}

const useSignOut = () => {
  return async () => {
    return poster(query())
  }
}

export default useSignOut
