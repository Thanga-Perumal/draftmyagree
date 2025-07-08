// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '42law Marketing Page',
  description: 'AI-powered legal document drafting tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
