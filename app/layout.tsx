import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const myFont = localFont({ src: './fonts/RobotInvaders.ttf' })


export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-a73w.vercel.app/'),
  title: 'Sahran Ashoor',
  description: 'Sahran Ashoor Portfolio Website',
  openGraph: {
    images: [
      {
        url: '/favicon.ico',
      },
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  )
}
