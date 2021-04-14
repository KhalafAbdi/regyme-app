import Session from '../lib/session'
import Header from '../components/Header'

import { UserContext } from '../context/userContext'

const Home = (session: any): JSX.Element => {
  console.log(session)

  return (
    <UserContext.Provider value={session}>
      <Header />
    </UserContext.Provider>
  )
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
