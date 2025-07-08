// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full py-4 text-center text-sm text-blue-500 border-t mt-10">
      &copy; {new Date().getFullYear()} DraftMyAgreement. All rights reserved.
    </footer>
  )
}
