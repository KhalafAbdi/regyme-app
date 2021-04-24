import Logo from '../components/Logo'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false)
  const router = useRouter()

  const toggleSideBar = () => {
    setIsOpen((prev) => !prev)
  }

  return (
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
      {isOpen && (
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
  )
}

export default Header
