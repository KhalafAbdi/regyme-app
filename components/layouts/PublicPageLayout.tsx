import Logo from '../Logo'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

type PublicPageLayoutProps = {
  children: JSX.Element
}

const PublicPageLayout = ({ children }: PublicPageLayoutProps) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const router = useRouter()

  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev)
  }

  return (
    <div className="flex flex-col max-w-screen-xl mx-auto ">
      <header className="flex flex-col">
        <div className="flex items-center justify-between px-5 py-3 ">
          <div>
            <Logo size="small" />
          </div>
          <button onClick={toggleSideBar} className="sm:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <div className="hidden sm:flex space-x-2">
            <ul>
              <Link href="/about">
                <li className="px-5 py-2 cursor-pointer hover:bg-gray-200 rounded">
                  About
                </li>
              </Link>
            </ul>
            <button
              onClick={() => router.push('/login')}
              className="px-3 py-2 mb-1 bg-gray-800 text-gray-50 w-full hover:bg-gray-900 rounded"
            >
              Sign in
            </button>
          </div>
        </div>
        {isSideBarOpen && (
          <div className="bg-white shadow-sm flex flex-col sm:hidden">
            <ul>
              <Link href="/about">
                <li className="px-5 py-3 ">About</li>
              </Link>
              <Link href="/login">
                <li className="px-5 py-3 mb-1 bg-gray-800 text-gray-50">
                  Sign in
                </li>
              </Link>
            </ul>
          </div>
        )}
      </header>
      {children}
    </div>
  )
}

export default PublicPageLayout
