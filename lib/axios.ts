import axios from 'axios'

type MutationType = {
  query: string
  variables?: any
}

const END_POINT: string = 'api/graphql'

export const poster = (mutation: MutationType) =>
  axios.post(END_POINT, mutation).then((res: any) => res.data)

export const fetcher = (url: string) =>
  axios.post(`${END_POINT}/${url}`).then((res: any) => res.data)
