import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import Head from 'next/head'

const josefin_Sans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin_Sans',
  weight: ['100', '200', '300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Pokemon Typing Game',
  description: 'Pokemon Typing Game by Poke API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap" />
      </Head>
      <body className={josefin_Sans.className}>{children}</body>
    </html>
  )
}
