import Link from 'next/link'
import PublicPageLayout from '../components/layouts/PublicPageLayout'

const Landing = () => {
  return (
    <PublicPageLayout>
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
    </PublicPageLayout>
  )
}

export default Landing
