import { useForm, SubmitHandler } from 'react-hook-form'
import { Logo, TextInput } from '../components'
import Link from 'next/link'

import { useRouter } from 'next/router'
import useSignUp from '../hooks/use-sign-up'
import { SignUpRequest } from '../lib/types'
import Session from '../lib/session'

import {
  nameRequirements,
  emailRequirements,
  passwordRequirements,
} from '../util/validation'

const Register = (): JSX.Element => {
  const { register, handleSubmit, formState } = useForm<SignUpRequest>()
  const signUpRequest = useSignUp()
  const router = useRouter()

  const onSubmit: SubmitHandler<SignUpRequest> = async (formdata) => {
    const { data, error } = await signUpRequest(formdata)

    if (data) {
      console.log('has data')
      router.push('/home')
    }

    //TODO: Handle error
  }

  const onGoogleSignUp = () => {
    console.log('Sign Up with google')
  }

  const onFacebookSignUp = () => {
    console.log('Sign Up with facebook')
  }

  return (
    <div className="px-5 mt-12">
      <div className="flex">
        <div className="flex flex-col w-full items-center">
          <div className="w-full sm:w-[450px]">
            <Logo size="big" />
            <div className="mt-4 bg-white shadow-xl px-5 py-8 flex flex-col">
              <span className="text text-2xl font-semibold">
                Create a new account
              </span>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                  first
                  label="Name"
                  inputRef={register('name', nameRequirements())}
                  errors={formState.errors?.name}
                />
                <TextInput
                  label="Email"
                  inputRef={register('email', emailRequirements())}
                  errors={formState.errors?.email}
                />
                <TextInput
                  label="Password"
                  type="password"
                  inputRef={register('password', passwordRequirements())}
                  errors={formState.errors?.password}
                >
                  <Link href="/reset">
                    <a className="text-blue-600 font-semibold hover:underline hover:text-blue-800">
                      Forgot your password?
                    </a>
                  </Link>
                </TextInput>
                <button
                  type="submit"
                  className="w-full mt-5 py-3 rounded bg-gray-800 text-gray-50 hover:bg-gray-900"
                >
                  Continue
                </button>
              </form>
              <div className="flex mt-5 items-center">
                <div className="bg-gray-200 h-[1px] flex-1"></div>
                <span className="px-5">or</span>
                <div className="bg-gray-200 h-[1px] flex-1"></div>
              </div>
              <button
                onClick={onGoogleSignUp}
                type="submit"
                className="mt-5 px-5 py-3 rounded bg-[#DB4437] text-gray-50 hover:underline"
              >
                Google
              </button>
              <button
                onClick={onFacebookSignUp}
                type="submit"
                className="mt-2 px-5 py-3 rounded bg-[#4267B2] text-gray-50 hover:underline"
              >
                Facebook
              </button>
            </div>
          </div>
          <span className="mt-5">
            Already have an account?{' '}
            <Link href="/login">
              <a className="text-blue-600">Sign in</a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const { req } = context

  const session = await Session.getLogginSession(req)

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: '/home',
      },
      props: {},
    }
  }

  return {
    props: {},
  }
}

export default Register
