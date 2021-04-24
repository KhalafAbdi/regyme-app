import { useForm, SubmitHandler } from 'react-hook-form'
import Logo from '../components/Logo'
import TextInput from '../components/TextInput'
import Link from 'next/link'

import { useSignIn } from '../hooks/useAuthorization'
import { SignInRequest } from '../lib/types'
import { useRouter } from 'next/router'

import {
  emailRequirements,
  passwordRequirements,
} from '../util/client-validation'

const Login: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<SignInRequest>()
  const signInRequest = useSignIn()
  const router = useRouter()

  const onSubmit: SubmitHandler<SignInRequest> = async (formdata) => {
    const { data, error } = await signInRequest(formdata)

    if (data) {
      router.push('/dashboard')
    }

    //TODO: Handle error
  }

  const onGoogleSignIn = () => {
    console.log('Sign in with google')
  }

  const onFacebookSignIn = () => {
    console.log('Sign in with facebook')
  }

  return (
    <div className="px-5 mt-24">
      <div className="flex">
        <div className="flex flex-col w-full items-center">
          <div className="w-full sm:w-[450px]">
            <Logo size="big" />
            <div className="mt-4 bg-white shadow-xl px-5 py-8 flex flex-col">
              <span className="text text-2xl font-semibold">
                Sign in to your account
              </span>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                  first
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
                onClick={onGoogleSignIn}
                type="submit"
                className="mt-5 px-5 py-3 rounded bg-[#DB4437] text-gray-50 hover:underline"
              >
                Google
              </button>
              <button
                onClick={onFacebookSignIn}
                type="submit"
                className="mt-2 px-5 py-3 rounded bg-[#4267B2] text-gray-50 hover:underline"
              >
                Facebook
              </button>
            </div>
          </div>
          <span className="mt-5">
            Don't have an account?{' '}
            <Link href="/register">
              <a className="text-blue-600">Sign up</a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
