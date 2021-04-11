import { useState } from 'react'
import { useMutation, useApolloClient, gql } from '@apollo/client'

const SignOutMutation = gql`
  mutation {
    signOut
  }
`

const useSignOut = () => {
  const client = useApolloClient()
  const [signOut] = useMutation(SignOutMutation)

  return async () => {
    try {
      await client.resetStore()
      const { data } = await signOut()

      return { data: data.signOut, error: undefined }
    } catch (err) {
      return { data: undefined, error: err }
    }
  }
}

export default useSignOut
