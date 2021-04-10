import '../styles/global.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
