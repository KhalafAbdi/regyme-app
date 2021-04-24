import axios from 'axios'
import { request } from 'graphql-request'

type MutationType = {
  query: string
  variables?: any
}

const END_POINT: string = 'api/graphql'

export const poster = (mutation: MutationType) =>
  axios.post(END_POINT, mutation).then((res: any) => res.data)

export const fetcher = (query: any) => request(END_POINT, query)
