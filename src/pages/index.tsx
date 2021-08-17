import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-tr from-[#00F260] to-[#0575E6] text-white/95">
      <div className="flex flex-col items-center border-white/90 border-4 p-12 w-11/12 sm:w-auto rounded-md">
        <h1 className="text-center text-6xl mb-12">Edward Sanders</h1>
        <Link href="/resume" passHref>
          <a className="underline text-3xl">Résumé</a>
        </Link>
        <div className="mt-12 flex space-x-8 text-xl">
          <Link href="https://twitter.com/itsthekeming" passHref>
            <a target="_blank" className="underline">
              Twitter
            </a>
          </Link>
          <Link href="https://github.com/itsthekeming" passHref>
            <a target="_blank" className="underline">
              GitHub
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/esanders1994" passHref>
            <a target="_blank" className="underline">
              LinkedIn
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
