import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Franky • Photography',
  description: 'Architecture • Eyes/Wildlife • Nature',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen">
        <Navbar />
        {children}
        <footer className="border-t border-neutral-800 mt-20">
          <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-400">© {new Date().getFullYear()} Franky. Alle rechten voorbehouden.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-white/80">Privacy</a>
              <a href="#" className="hover:text-white/80">Voorwaarden</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
