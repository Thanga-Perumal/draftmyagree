// app/layout.tsx
import './globals.css'
import Image from 'next/image'

export const metadata = {
  title: 'DraftMyAgreement',
  description: 'Create legally sound agreements effortlessly using AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-blue-800 font-sans">
        <header className="flex flex-col items-center justify-center py-6 space-y-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
            priority
          />
          <h1 className="text-4xl font-bold">DraftMyAgreement</h1>
          <nav className="space-x-6 text-lg">
            <a href="/" className="hover:text-blue-500">Home</a>
            <a href="/about" className="hover:text-blue-500">About</a>
            <a href="/pricing" className="hover:text-blue-500">Pricing</a>
          </nav>
        </header>
        <main className="px-4">{children}</main>
        <footer className="text-center text-sm text-gray-500 py-6">
          &copy; {new Date().getFullYear()} DraftMyAgreement. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
