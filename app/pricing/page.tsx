// pages/pricing.tsx
import Header from '../../components/Header'

export default function Pricing() {
  return (
    <>
    
      <main className="min-h-screen px-6 py-10 bg-blue-50 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Pricing</h1>
        <ul className="text-lg space-y-4">
          <li><strong>Free Plan:</strong> 3 agreements/month</li>
          <li><strong>Pro Plan:</strong> ₹299/month - Unlimited agreements</li>
          <li><strong>Enterprise:</strong> Contact us for custom solutions</li>
        </ul>
      </main>
    </>
  )
}
