import { useState } from 'react'
import { SignUpRequest } from '../lib/types'
import { useMutation, useApolloClient, gql } from '@apollo/client'

const SignUpMutation = gql`
  mutation SignUpMutation($name: String!, $email: String!, $password: String!) {
    signUp(input: { name: $name, email: $email, password: $password }) {
      _id
      email
      name
    }
  }
`

const useSignUp = () => {
  const client = useApolloClient()
  const [signUp] = useMutation(SignUpMutation)

  return async (payload: SignUpRequest) => {
    try {
      await client.resetStore()
      const { data } = await signUp({
        variables: payload,
      })

      return { data: data.signUp, error: undefined }
    } catch (err) {
      return { data: undefined, error: err }
    }
  }
}

export default useSignUp
