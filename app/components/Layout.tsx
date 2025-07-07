// components/Layout.tsx
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 py-10 bg-blue-50">{children}</main>
      <Footer />
    </div>
  )
}
