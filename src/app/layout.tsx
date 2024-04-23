import { PropsWithChildren } from 'react'
import { Noto_Sans } from 'next/font/google'
import '~/styles/globals.css'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
