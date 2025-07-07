// components/Header.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow">
      {/* Logo on the left */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="DraftMyAgreement Logo" width={40} height={40} />
        <span className="text-xl font-bold text-blue-700">DraftMyAgreement</span>
      </div>

      {/* Centered navigation */}
      <nav className="space-x-4 text-gray-600 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/pricing">Pricing</Link>
      </nav>

      {/* Search bar on the right */}
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </header>
  )
}
