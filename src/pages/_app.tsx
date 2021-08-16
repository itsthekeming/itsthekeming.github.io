import { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/globals.css'
import '@fontsource/noto-sans'
import '@fontsource/noto-serif'

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
