import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'

const josefin_Sans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin_Sans',
  weight: ['100', '200', '300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Poke Typing Game',
  description: 'Poke Typing Game by Poke API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={josefin_Sans.variable}>
      <body>{children}</body>
    </html>
  )
}
