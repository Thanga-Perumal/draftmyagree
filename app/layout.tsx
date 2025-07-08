// app/layout.tsx

import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DraftMyAgreement',
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
        {/* HEADER with logo and nav links */}
        <header className="flex justify-between items-center p-4 border-b shadow-sm">
          {/* Logo + App Name */}
          <div className="flex items-center space-x-4">
            <Image src="/logo.png" alt="Logo" width={120} height={120} />
            <h1 className="text-2xl font-bold text-blue-600">DraftMyAgreement</h1>
          </div>

          {/* Nav links */}
          <nav className="space-x-6">
            <Link href="/about" className="text-blue-600 hover:underline">
              About
            </Link>
            <Link href="/pricing" className="text-blue-600 hover:underline">
              Pricing
            </Link>
          </nav>
        </header>

        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )

      <body>{children}</body>
    </html>
  );
7897bf55aeb84afaa00c887d62a8cec1158f7f03
}
