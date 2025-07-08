'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Welcome to 42law</h1>
      <p className="text-lg text-gray-600 text-center max-w-xl">
        Legal solutions powered by technology. We provide fast, reliable, and affordable legal services for modern businesses.
      </p>
      <div className="mt-8">
        <Image
          src="/logo.png"
          alt="42law logo"
          width={120}
          height={120}
        />
      </div>
    </main>
  );
}
