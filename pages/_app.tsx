import '../styles/global.css'
import 'tailwindcss/tailwind.css'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolo-client'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  )
}

export default MyApp
