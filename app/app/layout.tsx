import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'DraftMyAgreement',
  description: 'AI-powered contract generation tool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
