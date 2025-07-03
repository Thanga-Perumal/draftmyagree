export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Welcome to DraftMyAgreement</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-xl font-bold">Free</h2>
          <p className="mt-2 text-sm">Basic contract generation</p>
          <p className="mt-4 font-semibold text-lg">₹0</p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg border-2 border-blue-600">
          <h2 className="text-xl font-bold text-blue-700">Pro</h2>
          <p className="mt-2 text-sm">Advanced customization</p>
          <p className="mt-4 font-semibold text-lg">₹299/mo</p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-xl font-bold">Enterprise</h2>
          <p className="mt-2 text-sm">Custom workflows + support</p>
          <p className="mt-4 font-semibold text-lg">Contact Us</p>
        </div>
      </div>
    </div>
  )
}
