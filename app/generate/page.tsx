// app/generate/page.tsx

'use client';

import { useState } from 'react';

export default function Generate() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  function handleGenerate() {
    if (input.trim()) {
      setOutput(
        `📄 Agreement Draft:\n\nThis agreement is generated based on your input:\n\n"${input}"`
      );
    } else {
      setOutput('Please enter a valid input.');
    }
  }

  return (
    <main className="max-w-2xl mx-auto p-10 text-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">DraftMyAgreement</h1>
      <textarea
        className="w-full h-32 p-4 border rounded mb-4"
        placeholder="Describe your deal in plain English..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        onClick={handleGenerate}
      >
        Generate Agreement
      </button>
      {output && (
        <pre className="bg-gray-100 text-left mt-6 p-4 rounded whitespace-pre-wrap">
          {output}
        </pre>
      )}
    </main>
  );
}
