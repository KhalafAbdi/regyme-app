import Logo from '../Logo'
import { useState } from 'react'
import classNames from 'classnames/bind'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useSignOut from '../../hooks/use-sign-out'

type PrivatePageLayoutProps = {
  children: JSX.Element
}

const PrivatePageLayout = ({ children }: PrivatePageLayoutProps) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const signOut = useSignOut()
  const router = useRouter()

  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev)
  }

  const handleSignOut = async () => {
    const { data, error } = await signOut()

    if (data) {
      router.push('/')
    }
  }

  return (
    <div className="flex h-screen">
      <div
        className={`shadow-sm flex flex-col bg-gradient-to-br from-gray-800 to-gray-700 flex-shrink-0 absolute top-0 left-0 h-full ${
          isSideBarOpen ? 'w-48' : ''
        }`}
      >
        <div className="flex px-3 py-5 text-white items-center border-b-2 border-gray-700">
          <button onClick={toggleSideBar} className="focus:outline-none">
            <svg
              className="w-5 h-5 mt-[1.6px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          {isSideBarOpen && (
            <div className="ml-5">
              <Logo size="small" />
            </div>
          )}
        </div>

        <div className="py-2 flex-1 flex flex-col justify-between">
          <ul className="flex flex-col space-y-1">
            <SideBarLink url="/dashboard">
              <>
                <span className="mr-2 text-gray-50">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </span>
                {isSideBarOpen && <span>Dashboard</span>}
              </>
            </SideBarLink>
            <SideBarLink url="/plans">
              <>
                <span className="mr-2 text-gray-50">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </span>
                {isSideBarOpen && <span>Plan</span>}
              </>
            </SideBarLink>
            <SideBarLink url="/workout">
              <>
                <span className="mr-2 text-gray-50">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </span>
                {isSideBarOpen && <span>Workouts</span>}
              </>
            </SideBarLink>
            <SideBarLink url="/exercises">
              <>
                <span className="mr-2 text-gray-50">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </span>
                {isSideBarOpen && <span>Exercises</span>}
              </>
            </SideBarLink>
          </ul>
          <ul>
            <SideBarLink url="/settings">
              <>
                <span className="mr-2 text-gray-50">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                {isSideBarOpen && <span>Settings</span>}
              </>
            </SideBarLink>
            <button
              onClick={handleSignOut}
              className="px-3 py-2 w-full text-left text-white hover:bg-blue-600 flex"
            >
              <span className="mr-2 text-gray-50">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </span>
              {isSideBarOpen && <span>Logout</span>}
            </button>
          </ul>
        </div>
      </div>
      <div className="flex-1 ml-[52px]">{children}</div>
    </div>
  )
}

export default PrivatePageLayout

type TextLink = {
  url: string
  children?: JSX.Element
}

const SideBarLink = ({ url, children }: TextLink) => {
  const router = useRouter()

  const cx = classNames.bind({
    base: 'px-3 py-2 cursor-pointer flex items-center text-white',
    active: 'bg-gray-800',
    hover: 'hover:bg-blue-600',
  })

  const isActive = router.asPath === url

  let className = cx({
    base: true,
    active: isActive,
    hover: !isActive,
  })

  return (
    <Link href={url}>
      <li className={className}>{children}</li>
    </Link>
  )
}
