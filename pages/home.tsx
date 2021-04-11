import useSignout from '../hooks/use-sign-out'
import Session from '../lib/session'
import { useRouter } from 'next/router'

const Home = (): JSX.Element => {
  const router = useRouter()
  const signInRequest = useSignout()

  const handleSignOut = async () => {
    const { data, error } = await signInRequest()

    if (data) {
      router.push('/home')
    }
  }

  return <button onClick={handleSignOut}>button</button>
}

export async function getServerSideProps(context: any) {
  const { req } = context

  const session = await Session.getLogginSession(req)

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    }
  }

  return {
    props: { session },
  }
}

export default Home
