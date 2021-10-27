import { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Edward Sanders</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App
