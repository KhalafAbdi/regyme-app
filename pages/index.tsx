import Head from 'next/head'
import Link from 'next/link'
import Session from '../lib/session'
import Header from '../components/Header'

const Landing = () => {
  return (
    <div>
      <Head>
        <title>Regyme.app | Home </title>
      </Head>
      <Header />
      <div className="px-5 py-3 mt-28 text-center">
        <h1 className="text-3xl font-bold">Gym gains made simple</h1>
        <h3 className="text-xl text-gray-300 mt-3">
          Keep track and improve in your all your lifs
        </h3>
        <div className="flex justify-center mt-3">
          <Link href="/register">
            <a className="bg-gray-800 text-gray-50 px-3 py-2 hover:bg-gray-700 rounded">
              Get started
            </a>
          </Link>
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

export default Landing
