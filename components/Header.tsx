import { UserContext } from '../context/userContext'
import { useContext, useState } from 'react'

import Menu from './Menu'

const Header = () => {
  const [
    isSmallScreenSideBarMenuOpen,
    setIsSmallScreenSideBarMenuOpen,
  ] = useState(false)

  const toggleSmallScreenSideBarMenu = () => {
    setIsSmallScreenSideBarMenuOpen((previous) => !previous)
  }

  return (
    <header className="px-5 py-3">
      <div className="sm:hidden">
        <button
          onClick={toggleSmallScreenSideBarMenu}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isSmallScreenSideBarMenuOpen && (
          <Menu closeMenu={toggleSmallScreenSideBarMenu} />
        )}
      </div>
      <div className="hidden sm:flex sm:w-full">
        <Menu />
      </div>
    </header>
  )
}

export default Header

/*
import { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import useSignout from '../hooks/use-sign-out'
import Link from 'next/link'
import classNames from 'classnames/bind'

type HeaderProps = {
  isAuthenticated: Boolean
}

const Header = ({ isAuthenticated }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  return (
    <div className="px-5 py-3">
      <div className="sm:hidden">
        <button onClick={() => openMenu()}>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <Menu isAuthenticated={isAuthenticated} closeMenu={closeMenu} />
        )}
      </div>
      <div className="hidden sm:flex">
        <Menu isAuthenticated={isAuthenticated} closeMenu={closeMenu} />
      </div>
    </div>
  )
}

export default Header

type MenuProps = {
  isAuthenticated: Boolean
  closeMenu: Function
}

const Menu = ({ isAuthenticated, closeMenu }: MenuProps): JSX.Element => {
  const signInRequest = useSignout()
  const router = useRouter()

  const register = () => {
    router.push('/login')
  }

  const handleSignOut = async () => {
    const { data, error } = await signInRequest()

    if (data) {
      router.push('/home')
    }
  }

  return (
    <div className="absolute top-0 left-0 bg-white sm:bg-transparent shadow-sm sm:shadow-none h-screen sm:h-auto sm:w-full sm:static">
      <button onClick={() => closeMenu()} className="px-5 py-3 sm:hidden">
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
      <div className="px-5 mt-20 w-96 sm:mt-0 py-3 sm:w-full">
        <div className="flex flex-col sm:flex-row space-y-20 sm:space-y-0 sm:justify-between">
          <Logo size="big" isAuthenticated={isAuthenticated} />
          {isAuthenticated ? (
            <AuthenticatedMenu path={router.asPath} signOut={handleSignOut} />
          ) : (
            <PublicMenu path={router.asPath} login={register} />
          )}
        </div>
      </div>
    </div>
  )
}

type AuthenticatedMenuProps = {
  path: string
  signOut: Function
}

const AuthenticatedMenu = ({ path, signOut }: AuthenticatedMenuProps) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  const handleSignOut = () => {
    signOut()
  }

  return (
    <ul className="sm:flex sm:space-x-1 sm:flex-shrink-0">
      <MenuListItem text="Home" query={path} />
      <MenuListItem text="Plans" />
      <MenuListItem text="Workouts" />
      <MenuListItem text="Exercises" />

      <div className="sm:hidden">
        <MenuListItem text="Settings" />
        <MenuListItem text="Profile" />
      </div>

      <div className="hidden relative sm:flex sm:flex-col pl-5 justify-center">
        <button
          onClick={toggleProfileMenu}
          className="h-8 w-8 bg-gray-500 rounded-full focus:outline-none"
        ></button>
        {isProfileMenuOpen && (
          <div className="absolute right-0 top-0 mt-12 mr-2 bg-white shadow-sm flex flex-col  text-center">
            <MenuListItem text="Settings" />
            <MenuListItem text="Profile" />
            <button
              onClick={handleSignOut}
              className="py-3 px-5 hover:bg-gray-100 w-36 "
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </ul>
  )
}

type PublicMenuProps = {
  path: string
  login: Function
}

const PublicMenu = ({ path, login }: PublicMenuProps) => {
  const handleLogin = () => {
    login()
  }

  return (
    <ul className="sm:flex sm:space-x-1 sm:flex-shrink-0">
      <MenuListItem text="FAQ" query={path} />
      <MenuListItem text="About" query={path} />

      <div className="sm:flex sm:flex-col justify-center mt-5 sm:mt-0 sm:pl-5">
        <button
          onClick={handleLogin}
          className="bg-blue-600 py-3 px-5 text-gray-50 w-full"
        >
          Sign in
        </button>
      </div>
    </ul>
  )
}

type MenuListItemProps = {
  text: string
  query?: string
}

const MenuListItem = ({ text, query }: MenuListItemProps): JSX.Element => {
  const cx = classNames.bind({
    base: 'py-3 px-5 hover:bg-gray-100',
    active: 'bg-gray-50 border-l-4 border-blue-600 sm:border-0',
  })

  const isActive = query?.includes(text.toLowerCase())
  const href = `/${text.toLowerCase()}`

  let className = cx({
    base: true,
    active: isActive,
  })

  return (
    <Link href={href}>
      <li className={className}>{text}</li>
    </Link>
  )
}

*/
