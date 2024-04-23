import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Edward Sanders',
}

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-tr from-[#00F260] to-[#0575E6] text-white/95">
      <div className="flex flex-col items-center border-white/90 border-4 p-12 w-11/12 sm:w-auto rounded-md">
        <h1 className="text-center text-6xl mb-12">Edward Sanders</h1>
        <Link href="/resume" className="underline text-3xl">
          Resume
        </Link>
        <div className="mt-12 flex space-x-8 text-xl">
          <Link
            target="_blank"
            href="https://twitter.com/itsthekeming"
            className="underline"
          >
            Twitter
          </Link>
          <Link
            target="_blank"
            href="https://github.com/itsthekeming"
            className="underline"
          >
            GitHub
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/esanders1994"
            className="underline"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  )
}
