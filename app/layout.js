import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WeekBeat',
  description: 'A website for you to get your teams beat for the week!',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
