import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'DraftMyAgreement',
  description: 'AI Contract Assistant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
