import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div>
      <Head>
        <title>Regyme.app | Home </title>
      </Head>
      <div className="flex justify-between px-5 py-3 items-center">
        <div>
          <span className="font-semibold text-xl">Regyme</span>
        </div>
        <button onClick={toggleMenu} className="sm:hidden">
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
        <div className="hidden sm:contents">
          <div className="flex space-x-5">
            <Link href="/about">
              <a className="px-3 py-2 hover:bg-gray-100 rounded hover:underline">
                About
              </a>
            </Link>
            <Link href="/faq">
              <a className="px-3 py-2 hover:bg-gray-100 rounded hover:underline">
                FAQ
              </a>
            </Link>

            <Link href="/sign-in">
              <a className="bg-gray-800 text-gray-50 px-3 py-2 hover:bg-gray-700 rounded">
                Sign in
              </a>
            </Link>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="bg-gray-50 absolute top-0 w-full h-full px-5 py-3">
          <div className="flex justify-end">
            <button onClick={toggleMenu}>
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
          </div>
          <div className="flex flex-col space-y-1">
            <Link href="/about">
              <a className="px-3 py-2 rounded">About</a>
            </Link>
            <Link href="/faq">
              <a className="px-3 py-2 rounded">FAQ</a>
            </Link>

            <Link href="/sign-in">
              <div className="flex bg-gray-100 py-3 justify-center hover:bg-gray-200 rounded">
                <a className="font-semibold">Sign in</a>
              </div>
            </Link>
          </div>
        </div>
      )}
      <div className="px-5 py-3 mt-28 text-center">
        <h1 className="text-3xl font-bold">Gym gains made simple</h1>
        <h3 className="text-xl text-gray-300 mt-3">
          Keep track and improve in your all your lifs
        </h3>
        <div className="flex justify-center mt-3">
          <Link href="/sign-in">
            <a className="bg-gray-800 text-gray-50 px-3 py-2 hover:bg-gray-700 rounded">
              Get started
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
