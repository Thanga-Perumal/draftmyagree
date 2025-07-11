'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Logo and Brand Name */}
      <div className="flex flex-col items-center mb-10">
        <Image
          src="/logo.png" // make sure the logo is in /public folder
          alt="Logo"
          width={120}
          height={120}
          className="mb-4"
        />
        <h1 className="text-3xl font-bold text-blue-600">DraftMyAgreement</h1>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="w-full max-w-md">
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your agreement..."
            className="w-full px-4 py-3 focus:outline-none text-gray-700"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </form>
    </main>
  );
}
