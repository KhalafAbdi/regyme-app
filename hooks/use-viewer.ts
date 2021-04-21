import { fetcher } from '../util/api'
import useSwr from 'swr'

const useViewer = () => {
  const query = `query { viewer { name, email }}`

  return useSwr(query, fetcher)
}

export default useViewer
