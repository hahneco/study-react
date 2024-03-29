import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header/header';

const inter = Inter({ subsets: ['latin'] })
import './globals.css'

export const metadata = {
  title: 'Next.js sample',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/ >
        {children}
      </body>
    </html>
  )
}
