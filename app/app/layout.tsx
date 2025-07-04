// app/layout.tsx
export const metadata = {
  title: 'DraftMyAgreement',
  description: 'AI-powered contract assistant',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        <header style={{ padding: '1rem', background: '#222', color: 'white' }}>
          <nav>
            <a href="/" style={{ marginRight: '1rem', color: 'white' }}>Home</a>
            <a href="/pricing" style={{ color: 'white' }}>Pricing</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
import Header from '@/components/Header'
