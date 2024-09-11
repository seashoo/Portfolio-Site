import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const myFont = localFont({ src: './fonts/RobotInvaders.ttf' })


export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-a73w.vercel.app/'),
  title: 'Ashish Job Portfolio Website',
  description: 'Ashish Job Portfolio Website',
  openGraph: {
    images: [
      {
        url: '/metadata.png',
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
