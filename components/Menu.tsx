import { useRouter } from 'next/router'
import useSignOut from '../hooks/use-sign-out'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'
import MenuLink from './MenuLink'
import Logo from './Logo'

type MenuProps = {
  closeMenu?: Function
}

const Menu = ({ closeMenu }: MenuProps) => {
  return (
    <div className="absolute top-0 left-0 w-10/12 bg-white shadow-lg sm:shadow-none h-screen sm:static sm:w-full sm:h-auto sm:bg-transparent ">
      {closeMenu && (
        <button
          onClick={() => closeMenu()}
          className="px-5 py-3 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      <div className="px-5 py-3 sm:px-0 sm:py-0">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mt-20 mb-10 sm:mt-0 sm:mb-0">
            <Logo />
          </div>
          <MenuItems />
        </div>
      </div>
    </div>
  )
}

export default Menu

const MenuItems = () => {
  const value = useContext(UserContext)

  return (
    <ul className="flex flex-col w-full space-y-2 sm:flex-row items-center sm:space-x-3 sm:space-y-0 sm:w-auto">
      {'session' in value ? <PrivateMenu /> : <PublicMenu />}
    </ul>
  )
}

const PrivateMenu = () => {
  const signOutRequest = useSignOut()
  const router = useRouter()

  const handleSignOut = async () => {
    const { data, error } = await signOutRequest()

    if (data) {
      router.push('/home')
    }
  }

  const privateMenuList = [
    { text: 'Plan', url: '/plans' },
    { text: 'Workout', url: '/workouts' },
    { text: 'Exercises', url: '/exercises' },
    { button: 'Sign out', fn: handleSignOut },
  ]

  return (
    <>
      {privateMenuList.map((item, index) => (
        <MenuLink key={index} item={item} />
      ))}
    </>
  )
}

const PublicMenu = () => {
  const publicMenuList = [
    { text: 'About', url: '/about' },
    { text: 'FAQ', url: '/faq' },
    { button: 'Sign in', url: '/login' },
  ]

  return (
    <>
      {publicMenuList.map((item, index) => (
        <MenuLink key={index} item={item} />
      ))}
    </>
  )
}
