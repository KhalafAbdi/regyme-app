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
