import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professional Portfolio - Full Stack Developer',
  description: 'Experienced full-stack developer specializing in modern web technologies, mobile applications, and innovative digital solutions.',
  keywords: 'full stack developer, web development, mobile apps, React, Next.js, Node.js, portfolio',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Professional Portfolio - Full Stack Developer',
    description: 'Experienced full-stack developer specializing in modern web technologies',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}