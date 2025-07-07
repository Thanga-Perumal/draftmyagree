import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-6 py-8 max-w-4xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}
