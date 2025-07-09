import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">


      {/* About content */}
      <section className="flex-1 px-6 py-12 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About DraftMyAgreement</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          <strong>DraftMyAgreement</strong> is your AI-powered assistant for creating legally sound agreements in minutes.
          Whether you're a business owner, freelancer, or legal professional, our tool simplifies contract drafting 
          with smart suggestions, customizable templates, and instant delivery.
        </p>

        <p className="mt-6 text-gray-600">
          Our mission is to make legal drafting accessible, accurate, and effortless — so you can focus on what matters most.
        </p>
      </section>

  
    </main>
  );
}
