'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Camera } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const items = [
    { href: '/', label: 'Home' },
    { href: '/architecture', label: 'Architecture' },
    { href: '/eyes-wildlife', label: 'Eyes / Wildlife' },
    { href: '/nature', label: 'Nature' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/70 border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Camera className="h-6 w-6" />
          <span className="tracking-widest font-semibold text-sm">FRANKY • PHOTOGRAPHY</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {items.map(i => (
            <Link key={i.href} href={i.href} className="hover:text-white/80">{i.label}</Link>
          ))}
        </nav>
        <button className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-neutral-700"
                onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-800">
          <nav className="px-4 py-3 grid gap-3">
            {items.map(i => (
              <Link key={i.href} href={i.href} className="py-2 border-b border-neutral-900/50 last:border-none">{i.label}</Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
