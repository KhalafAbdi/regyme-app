import { useState } from 'react'
import { SignInRequest } from '../lib/types'
import { useMutation, useApolloClient, gql } from '@apollo/client'

const SignInMutation = gql`
  mutation SignInMutation($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      _id
      email
      name
    }
  }
`

const useSignIn = () => {
  const client = useApolloClient()
  const [signIn] = useMutation(SignInMutation)

  return async (payload: SignInRequest) => {
    try {
      await client.resetStore()
      const { data } = await signIn({
        variables: payload,
      })

      return { data: data.signIn, error: undefined }
    } catch (err) {
      return { data: undefined, error: err }
    }
  }
}

export default useSignIn
