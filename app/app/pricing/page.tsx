'use client'
import PricingCard from '@/components/PricingCard'

export default function PricingPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8 text-blue-800">Pricing Plans</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <PricingCard title="Free" price="₹0" features={["1 contract/month", "Basic support"]} />
        <PricingCard title="Pro" price="₹499" features={["10 contracts/month", "Priority support"]} />
        <PricingCard title="Unlimited" price="₹999" features={["Unlimited contracts", "Premium support"]} />
      </div>
    </div>
  );
}
