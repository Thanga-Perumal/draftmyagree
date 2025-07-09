// components/Header.tsx
"use client"

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-md flex justify-between items-center">
      <div className="flex items-center space-x-3">
        {/* Logo image */}
        <Image src="/logo.png" alt="Logo" width={120} height={120} />
        {/* Site Name */}
        <span className="text-xl font-semibold text-blue-700">DraftMyAgreement</span>
      </div>
      
      <nav className="space-x-6">
        <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
      </nav>
    </header>
  );
}
