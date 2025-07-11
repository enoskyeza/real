import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professional Portfolio - Your Name',
  description: 'Full-stack developer and designer creating innovative digital solutions',
  keywords: 'developer, designer, portfolio, web development, full-stack',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Professional Portfolio - Your Name',
    description: 'Full-stack developer and designer creating innovative digital solutions',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}